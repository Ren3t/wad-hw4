import { mount } from "@vue/test-utils";
import List from "../../src/components/List.vue";

describe("List", () => {
    const testData = [
        { id: 1, title: "Foo", done: false }
    ]


    it('Display a message if no list item is provided', () => {
        const wrapper = mount(List);
            expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>')

    })
    it("Test when an item in the list is marked as done item is updated correctly", () => {
        const wrapper = mount(List, {
            propsData: {
                list: testData
            }
        });
        wrapper.setData({ list: testData })
        let items = wrapper.vm.list
        expect(items[0].done).toEqual(false)
        wrapper.find("span").trigger("click")
        expect(items[0].done).toEqual(true)
    })
});