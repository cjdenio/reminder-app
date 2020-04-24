import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from "vuex"

import { Datetime } from "vue-datetime"
import "vue-datetime/dist/vue-datetime.css"

Vue.use(VueRouter)
Vue.use(Vuex)

import Index from "./views/Index.vue"
import NewEvent from "./views/NewEvent.vue"
import Settings from "./views/Settings.vue"
import EventPage from "./views/Event.vue"

import Datepicker from "./components/Datepicker.vue"
import Slider from "./components/Slider.vue"
import BackButton from "./components/BackButton.vue"

import Footer from "./components/Footer.vue"

import "./style.scss"
import "./index.html"

import "@fortawesome/fontawesome-free/css/all.css"

Vue.component('date-picker', Datepicker)
Vue.component('slider', Slider)
Vue.component('remind-footer', Footer)
Vue.component('back-button', BackButton)

Vue.component('datetime', Datetime)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/new",
            component: NewEvent
        },
        {
            path: "/settings",
            component: Settings
        },
        {
            path: "/event/:id",
            component: EventPage,
            name: "event",
            beforeEnter(to, from, next) {
                if (store.state.events.find(i => i.id == to.params.id)) {
                    next()
                }
                else {
                    next('/')
                }
            }
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
})

const store = new Vuex.Store({
    state: {
        events: [],
        appLoading: false
    },
    mutations: {
        setLoading: (state, val) => state.appLoading = val,
        createEvent: (state, val) => {
            val.id = generateId(state.events)
            state.events.push(val)
        },
        deleteEvent: (state, eventId) => {
            state.events.splice(state.events.findIndex(i => i.id == eventId), 1)
        }
    }
})

new Vue({
    el: "#app",
    render: e => {
        return e('div', [
            e('router-view')
        ])
    },
    router,
    store,
    created() {
        setTimeout(() => store.commit('setLoading', false), 2000)
    }
})

// Open links in the browser
let shell = window.require('electron').shell
document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && (event.target.href.startsWith('http') || event.target.href.startsWith('https'))) {
        event.preventDefault()
        shell.openExternal(event.target.href)
    }
})

/**
 * Generates the next logical ID, or 1 if no events exist.
 * @param {Event[]} currentEvents - No pun indended. 
 */
function generateId(currentEvents) {
    if (currentEvents.length == 0) { return 1; }
    else { return currentEvents.slice().sort((a, b) => b.id - a.id)[0].id + 1 }
}