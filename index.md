---
layout: homepage
---

<a class="skipnav" href="#main-content">Skip main navigation</a>

<header role="banner">

  <div class="usa-disclaimer">
    <div class="usa-grid">
      <span class="usa-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/assets/img/us_flag_small.png">
        An official website of the United States government
      </span>
      <span class="usa-disclaimer-stage">This site is currently in alpha. <a href="https://18f.gsa.gov/dashboard/stages/#alpha">Learn more.</a></span>
    </div>
  </div>

  <section class="usa-banner">
    <div class="usa-grid">
      <nav>
        <a class="usa-banner-link-top" href="{{ site.repos[0].url }}">View on GitHub</a>
      </nav>
      <div class="usa-banner-content" id="main-content">
        <h1>Digital Contracting Cookbook</h1>
        <h2 class="usa-font-lead">Making Digital Service Acquisition Delectable</h2>
      </div>
    </div>
  </section>

</header>

<section class="usa-section">
  <div class="usa-grid">
    <h2>Introducing the Digital Contracting Cookbook</h2>
    <p>The goal of the Digital Contracting Cookbook is to provide agencies with information and suggestions about how to acquire digital services, based on the authors' experience. The cookbook is not a "how-to," in the sense that agencies' requirements are different, and there are multiple ways to achieve success.</p>
    <p>The <a href="https://playbook.cio.gov/techfar/" target="_blank">TechFAR Handbook</a> is yet another handy resource. Part of the <a href="https://playbook.cio.gov/" target="_blank">Digital Services Playbook</a>, the TechFAR Handbook expands on software development strategies and procurement insights. Consider both of these resources as additional helpful guides for your use.</p>
    <h2>Contents</h2>
    <ul>
    {% for recipe in site.data.recipes order:ascending%}
      <li><a href="{{site.baseurl}}/recipes/{{recipe.basename}}/">{{recipe.title}}</a></li>
    {% endfor %}
    </ul>
  </div>
</section>
