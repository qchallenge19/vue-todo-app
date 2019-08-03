import {createLocalVue, mount} from '@vue/test-utils'
import TodoItemList from '../src/components/feature/TodoItemList';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);
/* eslint-env jest */
describe('TodoItemList.vue', () => {
    let actions;
    let store;
    let getters;
    let state;
    let wrapper;

    beforeEach(() => {
        state = {
            todos: []
        };
        actions = {
            loadTodos: jest.fn(),
            addTodo: jest.fn(),
            updateTodo: jest.fn(),
            deleteTodo: jest.fn()
        };
        getters = {
            todos: () => [],
        };
        store = new Vuex.Store({
            state,
            actions,
            getters
        });

        wrapper = mount(TodoItemList, {
            sync: false,
            localVue,
            store
        });
    });
    test('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    test('is a TodoListItem instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('should check status of add button being disabled for empty input', () => {
        const button = wrapper.find('button');
        expect(button.attributes().disabled).toBeTruthy();
    });

    test('should call store action "addTodo" and "loadTodos" on `Add` button click', () => {
        const button = wrapper.find('button');
        button.element.disabled = false;
        button.trigger('click');
        expect(actions.addTodo).toHaveBeenCalled();
        expect(actions.loadTodos).toHaveBeenCalled();
    });
});
