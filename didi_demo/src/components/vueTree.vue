<template>
	<div>
		 <li>
		    <div
		      :class="{bold: isFolder}"
		      @click="toggle"
		      @dblclick="changeType">
		      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>{{model.name}}
		    </div>
		    <ul v-show="open" v-if="isFolder">
		    	<li class="add" @click="addChild">+</li>
		        <div class="item" v-for="model in model.children" :model="model"></div>
		    </ul>
		</li>
	</div>
	
</template>

<script>
  export default{
    props: {
      model: Object
    },
	  data: function () {
	    return {
	      open: false
	    }
	  },
	  computed: {
	    isFolder: function () {
	      return this.model.children &&
	        this.model.children.length
	    }
	  },
	  methods: {
	    toggle: function () {
	      if (this.isFolder) {
	        this.open = !this.open
	      }
	    },
	    changeType: function () {
	      if (!this.isFolder) {
	        Vue.set(this.model, 'children', [])
	        this.addChild()
	        this.open = true
	      }
	    },
	    addChild: function () {
	      this.model.children.push({
	        name: 'new stuff'
	      })
	    }
	  }

}
  	
	
</script>

<style>
  .item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
	
</style>