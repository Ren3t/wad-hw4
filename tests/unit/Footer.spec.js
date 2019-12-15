import { mount } from "@vue/test-utils";
import Footer from "../../src/components/Footer.vue";

describe("Footer", () => {
    const wrapper = mount(Footer)
    const vm = wrapper.vm


    it("After click, open = true", () => {
        expect(wrapper.vm.open).toEqual(false)
        wrapper.find("span").trigger("click")
        expect(wrapper.vm.open).toEqual(true)
    })

});