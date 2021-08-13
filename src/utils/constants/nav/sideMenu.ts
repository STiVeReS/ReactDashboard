/*
* url
* */
import {Dashboard} from "../../../pages/Dashboards/Dashboard";
import {Alternative} from "../../../pages/Dashboards/Alternative";
import {Pricing} from "../../../pages/Examples/Pricing";
import {Login} from "../../../pages/Examples/Login";
import {Register} from "../../../pages/Examples/Register";
import {Lock} from "../../../pages/Examples/Lock";
import {Timeline} from "../../../pages/Examples/Timeline";
import {Profile} from "../../../pages/Examples/Profile";
import {RtlSupport} from "../../../pages/Examples/RtlSupport";
import {Buttons} from "../../../pages/Components/Buttons";
import {Cards} from "../../../pages/Components/Cards";
import {Grid} from "../../../pages/Components/Grid";
import {Notifications} from "../../../pages/Components/Notifications";
import {Typography} from "../../../pages/Components/Typography";
import {MultiLevel} from "../../../pages/Components/MultiLevel";
import {Elements} from "../../../pages/Forms/Elements";
import {Component} from "../../../pages/Forms/Component";
import {Validation} from "../../../pages/Forms/Validation";
import {Google} from "../../../pages/Maps/Google";
import {Vector} from "../../../pages/Maps/Vecor";
import {Widgets} from "../../../pages/Widgets/Widgets";
import {Calendar} from "../../../pages/Calendar/Calendar";
import {Tables} from "../../../pages/Tables/Tables";
import {Sortable} from "../../../pages/Tables/Sortable";
import {DataTables} from "../../../pages/Tables/DataTables";
import {Charts} from "../../../pages/Charts/Charts";

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
    component?: ({label, url, isRaised}: IPageProps) => JSX.Element | any;
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
        icon: 'bi bi-house-door',
        children: [
            {
                label: 'Main',
                url: 'main',
                isRaised: true,
                component: Dashboard,
            },
            {
                label: 'Alternative',
                url: 'alternative',
                isRaised: true,
                component: Alternative,
            }
        ]
    },
    {
        label: 'Examples',
        url: 'examples',
        icon: 'bi bi-files',
        children: [
            {
                label: 'Pricing',
                url: 'pricing',
                isRaised: true,
                component: Pricing,
            },
            {
                label: 'Auth',
                url: 'login',
                isRaised: true,
                component: Login,
            },
            {
                label: 'Register',
                url: 'register',
                isRaised: true,
                component: Register,
            },
            {
                label: 'Lock',
                url: 'lock',
                isRaised: true,
                component: Lock,
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
            },
            {
                label: 'RTL support',
                url: 'rtl_support',
                isRaised: true,
                component: RtlSupport,
            },
        ]
    },
    {
        label: 'Components',
        url: 'components',
        icon: 'bi bi-toggles',
        children: [
            {
                label: 'Buttons',
                url: 'buttons',
                isRaised: true,
                component: Buttons,
            },
            {
                label: 'Cards',
                url: 'cards',
                isRaised: true,
                component: Cards,
            },
            {
                label: 'Grid',
                url: 'grid',
                isRaised: true,
                component: Grid,
            },
            {
                label: 'Notifications',
                url: 'notifications',
                isRaised: true,
                component: Notifications,
            },
            {
                label: 'Icons',
                url: 'typography',
                isRaised: true,
                component: Typography,
            },
            {
                label: 'Multi level',
                url: 'multi level',
                isRaised: true,
                component: MultiLevel,
            },
        ]
    },
    {
        label: 'Forms',
        url: 'forms',
        icon: 'bi bi-file-text-fill',
        children: [
            {
                label: 'Elements',
                url: 'elements',
                isRaised: true,
                component: Elements,
            },
            {
                label: 'Components',
                url: 'components',
                isRaised: true,
                component: Component,
            },
            {
                label: 'Validation',
                url: 'validation',
                isRaised: true,
                component: Validation,
            },

        ]
    },
    {
        label: 'Tables',
        url: 'tables',
        icon: 'bi bi-justify-left',
        children: [
            {
                label: 'Tables',
                url: 'tables',
                isRaised: true,
                component: Tables,
            },
            {
                label: 'Sortable',
                url: 'sortable',
                isRaised: true,
                component: Sortable,
            },
            {
                label: 'Datatables',
                url: 'datatables',
                isRaised: true,
                component: DataTables,
            }
        ]
    },
    {
        label: 'Maps',
        url: 'Maps',
        icon: 'bi bi-map-fill',
        children: [
            {
                label: 'Google',
                url: 'google',
                isRaised: true,
                component: Google,
            },
            {
                label: 'Vector',
                url: 'vector',
                isRaised: true,
                component: Vector,
            }
        ]
    },
    {
        label: 'Page Widgets',
        url: 'widgets',
        icon: 'bi bi-inboxes-fill',
        component: Widgets,
        isRaised: true,
        children: []
    },
    {
        label: 'Charts',
        url: 'charts',
        icon: 'bi bi-pie-chart-fill',
        component: Charts,
        isRaised: true,
        children: []
    },
    {
        label: 'Calendar',
        url: 'calendar',
        icon: 'bi bi-calendar2-week',
        component: Calendar,
        isRaised: true,
        children: []
    }
]