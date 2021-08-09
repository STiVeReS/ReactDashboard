/*
* url
* */
import {Dashboard} from "../../../view/Dashboards/Dashboard";
import {Alternative} from "../../../view/Dashboards/Alternative";
import {Pricing} from "../../../view/Examples/Pricing";
import {Login} from "../../../view/Examples/Login";
import {Register} from "../../../view/Examples/Register";
import {Lock} from "../../../view/Examples/Lock";
import {Timeline} from "../../../view/Examples/Timeline";
import {Profile} from "../../../view/Examples/Profile";
import {RtlSupport} from "../../../view/Examples/RtlSupport";
import {Buttons} from "../../../view/Components/Buttons";
import {Cards} from "../../../view/Components/Cards";
import {Grid} from "../../../view/Components/Grid";
import {Notifications} from "../../../view/Components/Notifications";
import {Typography} from "../../../view/Components/Typography";
import {MultiLevel} from "../../../view/Components/MultiLevel";
import {Elements} from "../../../view/Forms/Elements";
import {Component} from "../../../view/Forms/Component";
import {Validation} from "../../../view/Forms/Validation";
import {Google} from "../../../view/Maps/Google";
import {Vector} from "../../../view/Maps/Vecor";
import {Widgets} from "../../../view/Widgets/Widgets";
import {Calendar} from "../../../view/Calendar/Calendar";
import {Tables} from "../../../view/Tables/Tables";
import {Sortable} from "../../../view/Tables/Sortable";
import {DataTables} from "../../../view/Tables/DataTables";
import {Charts} from "../../../view/Charts/Charts";

/*
nav
*/
import {SideMenuContainer} from "../../../components/Navigation/Menu/SideMenuContainer";
/*
* interface
* */
import {IPageProps} from "../../interfaces/pages";

interface IMenu {
    label: string;
    url: string;
    component?: ({label, url, isRaised, nav}: IPageProps) => JSX.Element | any;
    nav?: string;
    isRaised?: boolean;
    icon?: string;
}

interface IMenuExtended extends IMenu {
    children: IMenu[];
}

export const NAV_COMPONENTS = {
    sidebar: SideMenuContainer
}


export const SIDE_MENU: IMenuExtended[] = [
    {
        label: 'Dashboard',
        url: 'dashboard',
        icon: 'grad-first',
        children: [
            {
                label: 'Main',
                url: 'main',
                isRaised: true,
                component: Dashboard,
                nav: 'sidebar',
            },
            {
                label: 'Alternative',
                url: 'alternative',
                isRaised: true,
                component: Alternative,
                nav: 'sidebar',
            }
        ]
    },
    {
        label: 'Examples',
        url: 'examples',
        icon: 'grad-second',
        children: [
            {
                label: 'Pricing',
                url: 'pricing',
                isRaised: true,
                component: Pricing,
                nav: 'sidebar',
            },
            {
                label: 'Auth',
                url: 'login',
                isRaised: true,
                component: Login,
                nav: 'sidebar',
            },
            {
                label: 'Register',
                url: 'register',
                isRaised: true,
                component: Register,
                nav: 'sidebar',
            },
            {
                label: 'Lock',
                url: 'lock',
                isRaised: true,
                component: Lock,
                nav: 'sidebar',
            },
            {
                label: 'Timeline',
                url: 'timeline',
                isRaised: true,
                component: Timeline,
            },
            {
                label: 'Profile',
                url: 'profile',
                isRaised: true,
                component: Profile,
                nav: 'sidebar',
            },
            {
                label: 'RTL support',
                url: 'rtl_support',
                isRaised: true,
                component: RtlSupport,
                nav: 'sidebar',
            },
        ]
    },
    {
        label: 'Components',
        url: 'components',
        icon: 'grad-second',
        children: [
            {
                label: 'Buttons',
                url: 'buttons',
                isRaised: true,
                component: Buttons,
                nav: 'sidebar',
            },
            {
                label: 'Cards',
                url: 'cards',
                isRaised: true,
                component: Cards,
                nav: 'sidebar',
            },
            {
                label: 'Grid',
                url: 'grid',
                isRaised: true,
                component: Grid,
                nav: 'sidebar',
            },
            {
                label: 'Notifications',
                url: 'notifications',
                isRaised: true,
                component: Notifications,
                nav: 'sidebar',
            },
            {
                label: 'Icons',
                url: 'typography',
                isRaised: true,
                component: Typography,
                nav: 'sidebar',
            },
            {
                label: 'Multi level',
                url: 'multi level',
                isRaised: true,
                component: MultiLevel,
                nav: 'sidebar',
            },
        ]
    },
    {
        label: 'Forms',
        url: 'forms',
        icon: 'grad-third',
        children: [
            {
                label: 'Elements',
                url: 'elements',
                isRaised: true,
                component: Elements,
                nav: 'sidebar',
            },
            {
                label: 'Components',
                url: 'components',
                isRaised: true,
                component: Component,
                nav: 'sidebar',
            },
            {
                label: 'Validation',
                url: 'validation',
                isRaised: true,
                component: Validation,
                nav: 'sidebar',
            },

        ]
    },
    {
        label: 'Tables',
        url: 'tables',
        icon: 'grad-first',
        children: [
            {
                label: 'Tables',
                url: 'tables',
                isRaised: true,
                component: Tables,
                nav: 'sidebar',
            },
            {
                label: 'Sortable',
                url: 'sortable',
                isRaised: true,
                component: Sortable,
                nav: 'sidebar',
            },
            {
                label: 'Datatables',
                url: 'datatables',
                isRaised: true,
                component: DataTables,
                nav: 'sidebar',
            }
        ]
    },
    {
        label: 'Maps',
        url: 'Maps',
        icon: 'grad-fourth',
        children: [
            {
                label: 'Google',
                url: 'google',
                isRaised: true,
                component: Google,
                nav: 'sidebar',
            },
            {
                label: 'Vector',
                url: 'vector',
                isRaised: true,
                component: Vector,
                nav: 'sidebar',
            }
        ]
    },
    {
        label: 'PageWidgets',
        url: 'widgets',
        icon: 'grad-fifth',
        component: Widgets,
        nav: 'sidebar',
        isRaised: true,
        children: []
    },
    {
        label: 'Charts',
        url: 'charts',
        icon: 'grad-third',
        component: Charts,
        nav: 'sidebar',
        isRaised: true,
        children: []
    },
    {
        label: 'Calendar',
        url: 'calendar',
        icon: 'grad-first',
        component: Calendar,
        nav: 'sidebar',
        isRaised: true,
        children: []
    }
]