package org.example.landingpage.styles


import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.silk.style.selectors.hover
import com.varabyte.kobweb.silk.style.CssStyle
import org.example.landingpage.models.Theme
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.px

val ServiceCardStyle = CssStyle {
    base {
        Modifier
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = Theme.LightGray.rgb
            )
            .backgroundColor(Theme.LightGray.rgb)
            .transition(
                Transition.of(property = "border", duration = 200.ms),
                Transition.of(property = "background", duration = 200.ms)
            )
    }
    hover {
        Modifier
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = Theme.Primary.rgb
            )
            .backgroundColor(Theme.LighterGray.rgb)
    }

    cssRule(" > #iconBox") {
        Modifier
            .backgroundColor(Colors.Transparent)
            .transition(Transition.of(property = "background", duration = 200.ms))
    }

    cssRule(":hover > #iconBox") {
        Modifier.backgroundColor(Colors.White)
    }

    cssRule(" > p") {
        Modifier
            .color(Theme.Secondary.rgb)
            .transition(Transition.of(property = "color", duration = 200.ms))
    }

    cssRule(":hover > p") {
        Modifier.color(Colors.White)
    }
}