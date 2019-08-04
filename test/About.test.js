import Vue from "vue";
import About from '../src/components/feature/About';
import {mount} from '@vue/test-utils'

/* eslint-env jest */
describe('About.vue', () => {
    let cmp, vm;
    const data = {
        title : 'Todo App',
            description: ''
    };
    beforeEach(() => {
        cmp = Vue.extend(About); // Create a copy of the component
        vm = new cmp({
            data: {
                title : 'Todo App',
                description: ''
            }

        }).$mount(); // Instantiates and mounts the component
    });
    test('renders correctly', () => {
        const wrapper = mount(About);
        expect(wrapper.element).toMatchSnapshot();
    });
    test('is a Vue instance', () => {
        expect(vm).toBeTruthy();
    });
    test('should test title of the page', () => {
        expect(vm.title).toEqual(data.title);
    });
    test('should test description of the page', () => {
        expect(vm.description).toEqual(data.description);
    })
});

