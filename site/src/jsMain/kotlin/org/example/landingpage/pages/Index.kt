package org.example.landingpage.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.background
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page
import org.example.landingpage.components.BackToTopButton
import org.example.landingpage.components.overflowMenu
import org.example.landingpage.sections.*

@Page
@Composable
fun homePage() {

    var menuOpened by remember { mutableStateOf(false) }
    Box(modifier = Modifier.fillMaxSize().background(Colors.Black)) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            mainSection(onMenuClicked = { menuOpened = true })
            aboutSection()
            ServiceSection()
            portfolioSection()
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

