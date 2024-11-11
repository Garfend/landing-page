package org.example.landingpage.sections

import androidx.compose.runtime.*
import org.example.landingpage.styles.AboutTextStyle
import org.example.landingpage.util.Constants.FONT_FAMILY
import org.example.landingpage.util.Constants.ABOUT_ME_INFO
import org.example.landingpage.util.Constants.SECTION_WIDTH
import org.example.landingpage.util.observeViewportEntered
import org.example.landingpage.util.animateNumbers
import com.varabyte.kobweb.compose.css.FontStyle
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.style.toModifier
import kotlinx.coroutines.launch
import org.example.landingpage.components.sectionTitle
import org.example.landingpage.models.Section
import org.example.landingpage.models.Skill
import org.example.landingpage.models.Theme
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun aboutSection() {
    Box(
        modifier = Modifier
            .id(Section.About.id)
            .maxWidth(SECTION_WIDTH.px)
            .padding(topBottom = 150.px)
            .backgroundColor(Theme.LightGrayBg.rgb),
    ) {
        aboutContent()
    }
}

@Composable
fun aboutContent() {
    Column(
        modifier = Modifier
            .fillMaxWidth(),
    ) {
        aboutMe()
    }
}

@Composable
fun aboutMe() {
    val scope = rememberCoroutineScope()
    var viewportEntered by remember { mutableStateOf(false) }
    val animatedPercentage = remember { mutableStateListOf(0, 0, 0, 0, 0) }

    observeViewportEntered(
        sectionId = Section.About.id,
        distanceFromTop = 300.0,
        onViewportEntered = {
            viewportEntered = true
            Skill.entries.forEach { skill ->
                scope.launch {
                    animateNumbers(
                        number = skill.percentage.value.toInt(),
                        onUpdate = {
                            animatedPercentage[skill.ordinal] = it
                        }
                    )
                }
            }
        }
    )

    Column(
        modifier = Modifier.fillMaxWidth(),
    ) {
        sectionTitle(section = Section.About)
        P(
            attrs = AboutTextStyle.toModifier()
                .margin(topBottom = 25.px)
                .maxWidth(500.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(18.px)
                .fontWeight(FontWeight.Normal)
                .fontStyle(FontStyle.Italic)
                .color(Theme.Secondary.rgb)
                .toAttrs()
        ) {
            ABOUT_ME_INFO.forEach { element ->
                Text(element)
            }
        }
    }
}