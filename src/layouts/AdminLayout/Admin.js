import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/portal.css'
import sidePanelComponent from '@/components/SidePanelComponent'
import headerComponent from '@/components/HeaderComponent'

export default {
    name: 'AdminLayout',
    components: {
        sidePanelComponent,
        headerComponent
    }
}