package org.example.landingpage.pages

import androidx.compose.runtime.*
import org.example.landingpage.components.BackToTopButton
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import org.example.landingpage.components.overflowMenu
import org.example.landingpage.models.Theme
import org.example.landingpage.sections.*
import org.jetbrains.compose.web.css.backgroundColor
import org.jetbrains.compose.web.dom.Div

@Page
@Composable
fun homePage() {
    Div(
        attrs = {
            style {
                backgroundColor(Theme.LightGrayBg.rgb)
            }
        }
    ) {
        var menuOpened by remember { mutableStateOf(false) }
        Box(modifier = Modifier.fillMaxSize()) {
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Top,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                mainSection(onMenuClicked = { menuOpened = true })
                aboutSection()
                ServiceSection()
                PortfolioSection()
//                achievementsSection()
//                TestimonialSection()
                experienceSection()
                contactSection()
                footerSection()
            }
            BackToTopButton()
            if (menuOpened) {
                overflowMenu(onMenuClosed = { menuOpened = false })
            }
        }
    }

}