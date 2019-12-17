import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Header", () => {
    const wrapper = mount(Header)

    it("Renders the correct date", () => {
        let today = new Date();
        let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })


    it("Renders the correct year", () => {
        let today = new Date();
        let date = today.getFullYear();
        expect(wrapper.html()).toContain(date)
    })

    it("Renders the correct month", () => {
        let today = new Date();
        let date = today.toLocaleString("en", { month: "long" }).substr(0,3).toUpperCase();
        //console.log(date)
        expect(wrapper.html()).toContain(date)
    })

    it("Renders the correct week day", () => {
        let today = new Date();
        let date = today.getDay();
        expect(wrapper.html()).toContain(date)
    })
});