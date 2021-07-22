import {Dashboard} from "../../pages/dashboards/Dashboard";
import {Alternative} from "../../pages/dashboards/Alternative";
import {Pricing} from "../../pages/examples/Pricing";
import {Login} from "../../pages/examples/Login";
import {Register} from "../../pages/examples/Register";
import {Lock} from "../../pages/examples/Lock";
import {Timeline} from "../../pages/examples/Timeline";
import {Profile} from "../../pages/examples/Profile";
import {RtlSupport} from "../../pages/examples/RtlSupport";
import {Buttons} from "../../pages/components/Buttons";
import {Cards} from "../../pages/components/Cards";
import {Grid} from "../../pages/components/Grid";
import {Notifications} from "../../pages/components/Notifications";
import {Typography} from "../../pages/components/Typography";
import {MultiLevel} from "../../pages/components/MultiLevel";
import {Elements} from "../../pages/forms/Elements";
import {Components} from "../../pages/forms/Components";
import {Validation} from "../../pages/forms/Validation";
import {Google} from "../../pages/maps/Google";
import {Vector} from "../../pages/maps/Vecot";
import {Widgets} from "../../pages/widgets/Widgets";
import {Calendar} from "../../pages/calendar/Calendar";
import {Tables} from "../../pages/tables/Tables";
import {Sortable} from "../../pages/tables/Sortable";
import {Datatables} from "../../pages/tables/Datatables";
import {Charts} from "../../pages/charts/Charts";

export const menu = [
    {
        label: 'Dashboard',
        labelUrl: 'dashboard',
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
        labelUrl: 'components',
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
        labelUrl: 'tables',
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
        labelUrl: 'maps',
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
        labelUrl: 'widgets',
        component: Widgets,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'charts',
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