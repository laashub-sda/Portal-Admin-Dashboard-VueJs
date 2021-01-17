import '@popperjs/core'
// import 'bootstrap/dist/js/bootstrap.min.js' // Not Working
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/portal.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import sidePanelComponent from '@/components/SidePanelComponent'
import headerComponent from '@/components/HeaderComponent'

export default {
    name: 'AdminLayout',
    components: {
        sidePanelComponent,
        headerComponent
    },
    created() {
        let popper = document.createElement('script');
        let bootstrap = document.createElement('script');
        bootstrap.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js');
        popper.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');

        document.head.appendChild(popper);
        document.head.appendChild(bootstrap);
    },
    mounted() {
        this.portalThemeSetup();
    },
    methods: {
        portalThemeSetup() {
            const sidePanelToggler = document.getElementById('sidepanel-toggler');
            const sidePanel = document.getElementById('app-sidepanel');
            const sidePanelDrop = document.getElementById('sidepanel-drop');
            const sidePanelClose = document.getElementById('sidepanel-close');

            let w = window.innerWidth;
            if (w >= 1200) {
                sidePanel.classList.remove('sidepanel-hidden');
                sidePanel.classList.add('sidepanel-visible');
            } else {
                sidePanel.classList.remove('sidepanel-visible');
                sidePanel.classList.add('sidepanel-hidden');
            }

            sidePanelToggler.addEventListener('click', () => {
                if (sidePanel.classList.contains('sidepanel-visible')) {
                    sidePanel.classList.remove('sidepanel-visible');
                    sidePanel.classList.add('sidepanel-hidden');
                } else {
                    sidePanel.classList.remove('sidepanel-hidden');
                    sidePanel.classList.add('sidepanel-visible');
                }
            });
            
            sidePanelClose.addEventListener('click', (e) => {
                e.preventDefault();
                sidePanelToggler.click();
            });
            
            sidePanelDrop.addEventListener('click', () => {
                sidePanelToggler.click();
            });
        }
    }
}