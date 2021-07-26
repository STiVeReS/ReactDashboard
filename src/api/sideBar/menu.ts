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


export const MENU_LIST = [
    {
        label: 'Dashboard',
        labelUrl: 'dashboard',
        children: [
            {
                page: 'Dashboard',
                url: 'dashboard',
                isRaised: true,
                component: Dashboard,
            },
            {
                page: 'Alternative',
                url: 'alternative',
                isRaised: true,
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
                isRaised: true,
                component: Pricing
            },
            {
                page: 'Login',
                url: 'login',
                isRaised: true,
                component: Login
            },
            {
                page: 'Register',
                url: 'register',
                isRaised: true,
                component: Register
            },
            {
                page: 'Lock',
                url: 'lock',
                isRaised: true,
                component: Lock
            },
            {
                page: 'Timeline',
                url: 'timeline',
                isRaised: true,
                component: Timeline
            }, {
                page: 'Profile',
                url: 'profile',
                isRaised: true,
                component: Profile
            }, {
                page: 'RTL support',
                url: 'rtl_support',
                isRaised: true,
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
                isRaised: true,
                component: Buttons
            },
            {
                page: 'Cards',
                url: 'cards',
                isRaised: true,
                component: Cards
            },
            {
                page: 'Grid',
                url: 'grid',
                isRaised: true,
                component: Grid
            },
            {
                page: 'Notifications',
                url: 'notifications',
                isRaised: true,
                component: Notifications
            },
            {
                page: 'Icons',
                url: 'Typography',
                isRaised: true,
                component: Typography
            },
            {
                page: 'Multi level',
                url: 'multi level',
                isRaised: true,
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
                isRaised: true,
                component: Elements
            },
            {
                page: 'Components',
                url: 'components',
                isRaised: true,
                component: Components
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
        label: 'Tables',
        labelUrl: 'Tables',
        children: [
            {
                page: 'Tables',
                url: 'tables',
                isRaised: true,
                component: Tables
            },
            {
                page: 'Sortable',
                url: 'sortable',
                isRaised: true,
                component: Sortable
            },
            {
                page: 'Datatables',
                url: 'datatables',
                isRaised: true,
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
                isRaised: true,
                component: Google
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
        label: 'Widgets',
        labelUrl: 'Widgets',
        component: Widgets,
        isRaised: true,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'Charts',
        component: Charts,
        isRaised: true,
        children: []
    },
    {
        label: 'Calendar',
        labelUrl: 'calendar',
        component: Calendar,
        isRaised: true,
        children: []
    }
]