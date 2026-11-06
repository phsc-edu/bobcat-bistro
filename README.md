Bobcat Bistro accessibility update

Includes automatic Light/Dark mode and manual footer selector.
Changes: Arial throughout, 16px regular menu names, 14px specials descriptions, improved small text, dark/light contrast, keyboard focus, skip link, live region announcements, preserved calendar focus, and larger controls.

WCAG 2.2 AA conformance is NOT certified. Test in real browsers with keyboard, screen readers, 200%/400% zoom and automated tools before claiming compliance.

Accessibility zoom update: Menu category buttons stack vertically at viewport widths <= 480 CSS px (including typical 400% zoom).

Accessibility update: The keyboard skip link now targets the Weekly Specials heading (the section containing today’s special), with programmatic focus support.


## Semantic accessibility refinements (November 2026)
- Menu entries use article elements with explicit accessible item-name associations and optional description associations; empty descriptions are not rendered. Prices remain visually unchanged.
- Calendar date buttons identify the specials details they control; the specials region is named by its displayed date.
- The footer theme selector uses one named group instead of nested groups.
- Opening the full calendar or using Today on a weekend selects the following Monday, which is visible in the Monday–Friday calendar.
- Re-run WAVE/axe and assistive-technology tests after deploying; these source changes are not a certification of WCAG conformance.

Final visual refinements: specials titles 14px Arial regular, descriptions 13px muted gray with 4px title-description gap; dark-mode description contrast preserved. Call-to-order icon and text visually shifted down 2px via asymmetric vertical padding without moving the button itself.

Final review changes: Mobile Browse All Specials uses Arial regular (400) with consistent button sizing. On Saturday/Sunday, both mobile and desktop feature the upcoming Monday and Tuesday specials; desktop keeps its full calendar.


## Hover refinements
Added consistent hover states for Drinks/Breakfast/Lunch tabs, weekday calendar buttons, week navigation, Today button, and Browse All Specials. Selected and expanded behavior is retained; hover applies only on hover-capable devices, and reduced-motion settings are respected.

Production testing update: Drinks, Breakfast, and Lunch display horizontally at standard mobile widths (361px and wider); they stack at 360 CSS px or less for narrow viewport and zoom reflow. Hover states retained.
