<template >
    <nav>
        <div class='subject'>
            <h4 class='list-title' @click="openList">Subject</h4>
            <ul v-if="List">
                <li>Web Design</li>
                <li>Apps Design</li>
                <li>Web Design</li>
                <li>Marketing</li>
                <li>Seo</li>
            </ul>
        </div>
        <div class='links'>
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link>
            <router-link to="/courses">Courses</router-link>
            <router-link to="/blogs">Blogs</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/teacher">teachers</router-link>
        </div>
        <button class='join'>
            Join Now
        </button>
    </nav>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            List: false,
        }
    },
    methods: {
        openList(){
            console.log(this.List);
            this.List = !this.Listl
        },
    },
}
</script>
<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0px auto;
        ul {
            // display:none;
        }
        .links {
            display: flex;
            gap: 15px;
            text-transform: Capitalize;
            letter-spacing: 1.5px;
        }
        .join{
            padding: 10px 20px;
            color: white;
            background: #FF6600;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
    }
</style>