/*
* PAGES
* */
import {PageContent} from "../../pages/PageDashboards/PageContent";
import {PageAlternative} from "../../pages/PageDashboards/PageAlternative";
import {PagePricing} from "../../pages/PageExamples/PagePricing";
import {PageLogin} from "../../pages/PageExamples/PageLogin";
import {PageRegister} from "../../pages/PageExamples/PageRegister";
import {PageLock} from "../../pages/PageExamples/PageLock";
import {PageTimeline} from "../../pages/PageExamples/PageTimeline";
import {PageProfile} from "../../pages/PageExamples/PageProfile";
import {PageRtlSupport} from "../../pages/PageExamples/PageRtlSupport";
import {PageButtons} from "../../pages/PageComponents/PageButtons";
import {PageCards} from "../../pages/PageComponents/PageCards";
import {PageGrid} from "../../pages/PageComponents/PageGrid";
import {PageNotifications} from "../../pages/PageComponents/PageNotifications";
import {Typography} from "../../pages/PageComponents/Typography";
import {PageMultiLevel} from "../../pages/PageComponents/PageMultiLevel";
import {PageElements} from "../../pages/PageForms/PageElements";
import {PageComponents} from "../../pages/PageForms/PageComponents";
import {Validation} from "../../pages/PageForms/Validation";
import {PageGoogle} from "../../pages/PageMaps/PageGoogle";
import {Vector} from "../../pages/PageMaps/PageVecot";
import {PageWidgets} from "../../pages/PageWidgets/PageWidgets";
import {PageCalendar} from "../../pages/PageCalendar/PageCalendar";
import {PageTables} from "../../pages/PageTables/PageTables";
import {PageSortable} from "../../pages/PageTables/PageSortable";
import {PageDatatables} from "../../pages/PageTables/PageDatatables";
import {PageCharts} from "../../pages/PageCharts/PageCharts";
/*
sideBar
*/


export const MENU_LIST = [
    {
        label: 'Dashboard',
        labelUrl: 'dashboard',
        children: [
            {
                page: 'Dashboard',
                url: 'main',
                isRaised: true,
                component: PageContent,
            },
            {
                page: 'Alternative',
                url: 'alternative',
                isRaised: true,
                component: PageAlternative
            }
        ]
    },
    {
        label: 'PageExamples',
        labelUrl: 'examples',
        children: [
            {
                page: 'Pricing',
                url: 'pricing',
                isRaised: true,
                component: PagePricing
            },
            {
                page: 'Login',
                url: 'login',
                isRaised: true,
                component: PageLogin
            },
            {
                page: 'Register',
                url: 'register',
                isRaised: true,
                component: PageRegister
            },
            {
                page: 'Lock',
                url: 'lock',
                isRaised: true,
                component: PageLock
            },
            {
                page: 'Timeline',
                url: 'timeline',
                isRaised: true,
                component: PageTimeline
            }, {
                page: 'Profile',
                url: 'profile',
                isRaised: true,
                component: PageProfile
            }, {
                page: 'RTL support',
                url: 'rtl_support',
                isRaised: true,
                component: PageRtlSupport,
            },
        ]
    },
    {
        label: 'Components',
        labelUrl: 'components',
        children: [
            {
                page: 'Buttons',
                url: 'buttons',
                isRaised: true,
                component: PageButtons
            },
            {
                page: 'Cards',
                url: 'cards',
                isRaised: true,
                component: PageCards
            },
            {
                page: 'Grid',
                url: 'grid',
                isRaised: true,
                component: PageGrid
            },
            {
                page: 'Notifications',
                url: 'notifications',
                isRaised: true,
                component: PageNotifications
            },
            {
                page: 'Icons',
                url: 'typography',
                isRaised: true,
                component: Typography
            },
            {
                page: 'Multi level',
                url: 'multi level',
                isRaised: true,
                component: PageMultiLevel
            },
        ]
    },
    {
        label: 'PageForms',
        labelUrl: 'forms',
        children: [
            {
                page: 'Elements',
                url: 'elements',
                isRaised: true,
                component: PageElements
            },
            {
                page: 'Components',
                url: 'components',
                isRaised: true,
                component: PageComponents
            },
            {
                page: 'Validation',
                url: 'validation',
                isRaised: true,
                component: Validation
            },

        ]
    },
    {
        label: 'PageTables',
        labelUrl: 'tables',
        children: [
            {
                page: 'PageTables',
                url: 'tables',
                isRaised: true,
                component: PageTables
            },
            {
                page: 'Sortable',
                url: 'sortable',
                isRaised: true,
                component: PageSortable
            },
            {
                page: 'Datatables',
                url: 'datatables',
                isRaised: true,
                component: PageDatatables
            }
        ]
    },
    {
        label: 'PageMaps',
        labelUrl: 'PageMaps',
        children: [
            {
                page: 'Google',
                url: 'google',
                isRaised: true,
                component: PageGoogle
            },
            {
                page: 'Vector',
                url: 'vector',
                isRaised: true,
                component: Vector
            }
        ]
    },
    {
        label: 'PageWidgets',
        labelUrl: 'widgets',
        component: PageWidgets,
        isRaised: true,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'charts',
        component: PageCharts,
        isRaised: true,
        children: []
    },
    {
        label: 'Calendar',
        labelUrl: 'calendar',
        component: PageCalendar,
        isRaised: true,
        children: []
    }
]