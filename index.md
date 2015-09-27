---
layout: main
---
# Digital Contracting Cookbook

The goal of the digital contracting cookbook is to provide agencies with information and suggestions about how to acquire digital services, based on the authors' experience. The cookbook is not a "how-to," in the sense that agencies' requirements are different and there are multiple ways to achieve success.

## Contents

{% for recipe in site.data.recipes order:ascending%}
* [{{recipe.title}}]({{site.baseurl}}/recipes/{{recipe.basename}}/)
{% endfor %}

## How to use

## How to contribute