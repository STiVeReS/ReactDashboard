/*
* PAGES
* */
import {Dashboard} from "../../pages/Dashboards/Dashboard";
import {Alternative} from "../../pages/Dashboards/Alternative";
import {Pricing} from "../../pages/Examples/Pricing";
import {Login} from "../../pages/Examples/Login";
import {Register} from "../../pages/Examples/Register";
import {Lock} from "../../pages/Examples/Lock";
import {Timeline} from "../../pages/Examples/Timeline";
import {Profile} from "../../pages/Examples/Profile";
import {RtlSupport} from "../../pages/Examples/RtlSupport";
import {Buttons} from "../../pages/Components/Buttons";
import {Cards} from "../../pages/Components/Cards";
import {Grid} from "../../pages/Components/Grid";
import {Notifications} from "../../pages/Components/Notifications";
import {Typography} from "../../pages/Components/Typography";
import {MultiLevel} from "../../pages/Components/MultiLevel";
import {Elements} from "../../pages/Forms/Elements";
import {Components} from "../../pages/Forms/Components";
import {Validation} from "../../pages/Forms/Validation";
import {Google} from "../../pages/Maps/Google";
import {Vector} from "../../pages/Maps/Vecot";
import {Widgets} from "../../pages/Widgets/Widgets";
import {Calendar} from "../../pages/Calendar/Calendar";
import {Tables} from "../../pages/Tables/Tables";
import {Sortable} from "../../pages/Tables/Sortable";
import {Datatables} from "../../pages/Tables/Datatables";
import {Charts} from "../../pages/Charts/Charts";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";





export const MENU_LIST = [
    {
        label: 'Dashboard',
        labelUrl: 'dashboard',
        icon: faCoffee,
        children: [
            {
                page: 'Dashboard',
                url: 'dashboard',
                component: Dashboard,
            },
            {
                page: 'Alternative',
                url: 'alternative',
                component: Alternative
            }
        ]
    },
    {
        label: 'Examples',
        labelUrl: 'examples',
        children: [
            {
                page: 'Pricing',
                url: 'pricing',
                component: Pricing
            },
            {
                page: 'Login',
                url: 'login',
                component: Login
            },
            {
                page: 'Register',
                url: 'register',
                component: Register
            },
            {
                page: 'Lock',
                url: 'lock',
                component: Lock
            },
            {
                page: 'Timeline',
                url: 'timeline',
                component: Timeline
            }, {
                page: 'Profile',
                url: 'profile',
                component: Profile
            }, {
                page: 'RTL support',
                url: 'rtl_support',
                component: RtlSupport,
            },
        ]
    },
    {
        label: 'Components',
        labelUrl: 'Components',
        children: [
            {
                page: 'Buttons',
                url: 'buttons',
                component: Buttons
            },
            {
                page: 'Cards',
                url: 'cards',
                component: Cards
            },
            {
                page: 'Grid',
                url: 'grid',
                component: Grid
            },
            {
                page: 'Notifications',
                url: 'notifications',
                component: Notifications
            },
            {
                page: 'Icons',
                url: 'Typography',
                component: Typography
            },
            {
                page: 'Multi level',
                url: 'multi level',
                component: MultiLevel
            },
        ]
    },
    {
        label: 'Forms',
        labelUrl: 'forms',
        children: [
            {
                page: 'Elements',
                url: 'elements',
                component: Elements
            },
            {
                page: 'Components',
                url: 'components',
                component: Components
            },
            {
                page: 'Validation',
                url: 'validation',
                component: Validation
            },

        ]
    },
    {
        label: 'Tables',
        labelUrl: 'Tables',
        children: [
            {
                page: 'Tables',
                url: 'tables',
                component: Tables
            },
            {
                page: 'Sortable',
                url: 'sortable',
                component: Sortable
            },
            {
                page: 'Datatables',
                url: 'datatables',
                component: Datatables
            }
        ]
    },
    {
        label: 'Maps',
        labelUrl: 'Maps',
        children: [
            {
                page: 'Google',
                url: 'google',
                component: Google
            },
            {
                page: 'Vector',
                url: 'vector',
                component: Vector
            }
        ]
    },
    {
        label: 'Widgets',
        labelUrl: 'Widgets',
        component: Widgets,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'Charts',
        component: Charts,
        children: []
    },
    {
        label: 'Calendar',
        labelUrl: 'calendar',
        component: Calendar,
        children: []
    }
]