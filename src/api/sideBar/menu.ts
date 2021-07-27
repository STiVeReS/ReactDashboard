/*
* PAGES
* */
import {DashboardPage} from "../../pages/Dashboards/DashboardPage";
import {AlternativePage} from "../../pages/Dashboards/AlternativePage";
import {PricingPage} from "../../pages/Examples/PricingPage";
import {LoginPage} from "../../pages/Examples/LoginPage";
import {RegisterPage} from "../../pages/Examples/RegisterPage";
import {LockPage} from "../../pages/Examples/LockPage";
import {TimelinePage} from "../../pages/Examples/TimelinePage";
import {ProfilePage} from "../../pages/Examples/ProfilePage";
import {RtlSupportPage} from "../../pages/Examples/RtlSupportPage";
import {ButtonsPage} from "../../pages/Components/ButtonsPage";
import {CardsPage} from "../../pages/Components/CardsPage";
import {GridPage} from "../../pages/Components/GridPage";
import {NotificationsPage} from "../../pages/Components/NotificationsPage";
import {TypographyPage} from "../../pages/Components/TypographyPage";
import {MultiLevelPage} from "../../pages/Components/MultiLevelPage";
import {ElementsPage} from "../../pages/Forms/ElementsPage";
import {ComponentsPage} from "../../pages/Forms/ComponentsPage";
import {ValidationPage} from "../../pages/Forms/ValidationPage";
import {GooglePage} from "../../pages/Maps/GooglePage";
import {Vector} from "../../pages/Maps/VecotPage";
import {WidgetsPage} from "../../pages/Widgets/WidgetsPage";
import {CalendarPage} from "../../pages/Calendar/CalendarPage";
import {TablesPage} from "../../pages/Tables/TablesPage";
import {SortablePage} from "../../pages/Tables/SortablePage";
import {DatatablesPage} from "../../pages/Tables/DatatablesPage";
import {ChartsPage} from "../../pages/Charts/ChartsPage";

// const DashboardPage = lazy(() =>
//     import("../../pages/Dashboards/DashboardPage")
//         .then(({DashboardPage}) => ({default: DashboardPage}))
// );


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
                component: DashboardPage,
            },
            {
                page: 'Alternative',
                url: 'alternative',
                isRaised: true,
                component: AlternativePage
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
                component: PricingPage
            },
            {
                page: 'Auth',
                url: 'login',
                isRaised: true,
                component: LoginPage
            },
            {
                page: 'Register',
                url: 'register',
                isRaised: true,
                component: RegisterPage
            },
            {
                page: 'Lock',
                url: 'lock',
                isRaised: true,
                component: LockPage
            },
            {
                page: 'Timeline',
                url: 'timeline',
                isRaised: true,
                component: TimelinePage
            }, {
                page: 'Profile',
                url: 'profile',
                isRaised: true,
                component: ProfilePage
            }, {
                page: 'RTL support',
                url: 'rtl_support',
                isRaised: true,
                component: RtlSupportPage,
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
                component: ButtonsPage
            },
            {
                page: 'Cards',
                url: 'cards',
                isRaised: true,
                component: CardsPage
            },
            {
                page: 'Grid',
                url: 'grid',
                isRaised: true,
                component: GridPage
            },
            {
                page: 'Notifications',
                url: 'notifications',
                isRaised: true,
                component: NotificationsPage
            },
            {
                page: 'Icons',
                url: 'typography',
                isRaised: true,
                component: TypographyPage
            },
            {
                page: 'Multi level',
                url: 'multi level',
                isRaised: true,
                component: MultiLevelPage
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
                component: ElementsPage
            },
            {
                page: 'Components',
                url: 'components',
                isRaised: true,
                component: ComponentsPage
            },
            {
                page: 'Validation',
                url: 'validation',
                isRaised: true,
                component: ValidationPage
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
                component: TablesPage
            },
            {
                page: 'Sortable',
                url: 'sortable',
                isRaised: true,
                component: SortablePage
            },
            {
                page: 'Datatables',
                url: 'datatables',
                isRaised: true,
                component: DatatablesPage
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
                component: GooglePage
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
        component: WidgetsPage,
        isRaised: true,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'charts',
        component: ChartsPage,
        isRaised: true,
        children: []
    },
    {
        label: 'Calendar',
        labelUrl: 'calendar',
        component: CalendarPage,
        isRaised: true,
        children: []
    }
]