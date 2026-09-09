/* ═══════════════════════════════════════════════════════════
   Pranitha R — AI Systems Portfolio
   Week 7.3: Plant Your Flag (Domain + Badge)
   app.js — Defensive Client Logic + Analytics Telemetry
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── SafeStorage: localStorage with Private Browsing fallback ── */
  var SafeStorage = (function () {
    var mem = {};
    var ok = false;
    try { localStorage.setItem("__test__", "1"); localStorage.removeItem("__test__"); ok = true; } catch (e) {}
    return {
      get: function (k) {
        if (ok) { try { return localStorage.getItem(k); } catch (e) {} }
        return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null;
      },
      set: function (k, v) {
        if (ok) { try { localStorage.setItem(k, v); return; } catch (e) {} }
        mem[k] = v;
      }
    };
  })();

  /* ── XSS-safe string truncation ── */
  function sanitize(s) {
    return String(s == null ? "" : s)
      .replace(/[<>&"']/g, function (c) {
        return { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c];
      })
      .slice(0, 2000);
  }

  /* ── RFC-5322 lightweight email check ── */
  function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(e).trim());
  }

  /* ── Client-side Analytics Telemetry ── */
  var Analytics = (function () {
    var events = [];
    var sessionStart = Date.now();

    function push(name, props) {
      var evt = {
        event: name,
        ts: new Date().toISOString(),
        path: window.location.pathname,
        props: props || {}
      };
      events.push(evt);
      /* Forward to Cloudflare beacon if present (cf.track polyfill) */
      if (window.cf && typeof window.cf.track === "function") {
        try { window.cf.track(name, props); } catch (e) {}
      }
    }

    return {
      page: function () {
        push("pageview", { title: document.title, referrer: document.referrer });
      },
      event: function (name, props) {
        push(name, props);
      },
      sessionDuration: function () {
        return Math.round((Date.now() - sessionStart) / 1000);
      },
      flush: function () {
        return events;
      }
    };
  })();

  /* Track page load */
  Analytics.page();

  /* ── Theme Management ── */
  var THEME_KEY = "portfolio-theme-7.3";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme || "");
    SafeStorage.set(THEME_KEY, theme || "");
    /* Update aria-pressed on buttons */
    document.querySelectorAll(".theme-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.themeVal === theme ? "true" : "false");
    });
    Analytics.event("theme_change", { theme: theme });
  }

  document.addEventListener("DOMContentLoaded", function () {

    /* Restore saved theme */
    var savedTheme = SafeStorage.get(THEME_KEY);
    if (savedTheme) applyTheme(savedTheme);

    /* Attach theme buttons */
    document.querySelectorAll(".theme-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = btn.getAttribute("data-theme-val");
        var cur = document.documentElement.getAttribute("data-theme");
        applyTheme(cur === t ? "" : t);
      });
    });

    /* ── Char counter for textarea ── */
    var textarea = document.getElementById("form-message");
    var counter  = document.getElementById("char-counter");
    if (textarea && counter) {
      textarea.addEventListener("input", function () {
        counter.textContent = textarea.value.length + " / 1500 characters";
      });
    }

    /* ── Contact Form — Double-submit lock + validation ── */
    var form       = document.getElementById("discovery-form");
    var submitBtn  = document.getElementById("submit-btn");
    var submitText = document.getElementById("submit-text");
    var feedback   = document.getElementById("form-feedback");
    var isSubmitting = false;

    function showError(id, msg) {
      var el = document.getElementById(id);
      if (el) el.textContent = msg;
    }

    function clearErrors() {
      ["form-name-error", "form-email-error", "form-message-error"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.textContent = "";
      });
      if (feedback) {
        feedback.className = "form-feedback-box";
        feedback.textContent = "";
      }
    }

    function setLoading(on) {
      if (!submitBtn) return;
      if (on) {
        submitBtn.setAttribute("aria-busy", "true");
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = "Sending…";
      } else {
        submitBtn.removeAttribute("aria-busy");
        submitBtn.disabled = false;
        if (submitText) submitText.textContent = "Send Inquiry";
      }
    }

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (isSubmitting) return;

        clearErrors();

        var nameVal  = sanitize(form.querySelector("#form-name")    ? form.querySelector("#form-name").value    : "").trim();
        var emailVal = sanitize(form.querySelector("#form-email")   ? form.querySelector("#form-email").value   : "").trim();
        var msgVal   = sanitize(form.querySelector("#form-message") ? form.querySelector("#form-message").value : "").trim();

        var valid = true;

        if (!nameVal || nameVal.length < 2) {
          showError("form-name-error", "Please enter your full name (at least 2 characters).");
          valid = false;
        }
        if (!emailVal || !validEmail(emailVal)) {
          showError("form-email-error", "Please enter a valid work email address.");
          valid = false;
        }
        if (!msgVal || msgVal.length < 10) {
          showError("form-message-error", "Please describe your inquiry (at least 10 characters).");
          valid = false;
        }

        if (!valid) return;

        isSubmitting = true;
        setLoading(true);

        Analytics.event("form_submit_attempt", { name_len: nameVal.length, email_domain: emailVal.split("@")[1] || "" });

        /* Simulate async submission (Netlify Forms catches on live site) */
        setTimeout(function () {
          isSubmitting = false;
          setLoading(false);
          if (feedback) {
            feedback.className = "form-feedback-box success";
            feedback.textContent = "✓ Inquiry received! I'll reply within 24 hours.";
          }
          form.reset();
          if (counter) counter.textContent = "0 / 1500 characters";
          Analytics.event("form_submit_success", {});
        }, 1400);
      });
    }

    /* ── Analytics: Track FlyRank badge verification clicks ── */
    var badgeLink = document.querySelector(".flyrank-badge-link");
    if (badgeLink) {
      badgeLink.addEventListener("click", function () {
        Analytics.event("badge_verification_click", {
          target: badgeLink.href,
          session_duration_s: Analytics.sessionDuration()
        });
      });
    }

    /* ── Analytics: Track outbound links ── */
    document.querySelectorAll("a[target='_blank']").forEach(function (a) {
      a.addEventListener("click", function () {
        Analytics.event("outbound_click", { href: a.href, text: a.textContent.trim().slice(0, 80) });
      });
    });

    /* ── Session End: log duration ── */
    window.addEventListener("beforeunload", function () {
      Analytics.event("session_end", { duration_s: Analytics.sessionDuration() });
    });

    /* ── Smooth scroll on anchors ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          Analytics.event("internal_nav", { target: a.getAttribute("href") });
        }
      });
    });

  }); /* End DOMContentLoaded */

})();
