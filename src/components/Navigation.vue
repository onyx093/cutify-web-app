<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="menuLink"
          href="/"
          :class="navigationMenuTriggerStyle()"
        >
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="menuLink"
          href="/services"
          :class="navigationMenuTriggerStyle()"
        >
          Services
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="menuLink"
          href="/testimonials"
          :class="navigationMenuTriggerStyle()"
        >
          Testimonials
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="menuLink"
          href="/blog"
          :class="navigationMenuTriggerStyle()"
        >
          Blog
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          class="menuLink"
          href="/contact"
          :class="navigationMenuTriggerStyle()"
        >
          Contact us
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
</script>

<style scoped>
.menuLink {
  @apply text-[#212227];
}
</style>
