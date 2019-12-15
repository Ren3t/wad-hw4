import { mount } from "@vue/test-utils";
import List from "../../src/components/List.vue";

describe("List", () => {

    const wrapper = mount(List, {
        propsData: {
            list: []
        }
    });

    it('Display a message if no list item is provided', () => {
        expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>')
    })
});