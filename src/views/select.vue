<template>
  <div id="Select">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p @click="axiosTest" style="cursor:pointer">axios</p>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="水果"
        width="180">
      </el-table-column>
      <el-table-column
        prop="benefit"
        label="好处"
        width="180">
      </el-table-column>
    </el-table>
    <el-button type="primary" class="tag-read" data-clipboard-text="我是可以复制的内容，啦啦啦啦" @click="copy">点击复制</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  import Clipboard from 'clipboard'
  export default {
    name: 'Select',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: '',
        tableData: []
      }
    },
    methods: {
      axiosTest() {
        axios.get('https://www.easy-mock.com/mock/5b17a9b0882c1426ae7cf60b/first/')
          .then(response => {
            this.tableData = response.data.data.fruit
          })
          .catch(error => {
            console.log(error)
          })
      },
      copy() {
        var clipboard = new Clipboard('.tag-read')
        clipboard.on('success', e => { console.log('复制成功'); clipboard.destroy() })
        clipboard.on('error', e => { console.log('该浏览器不支持自动复制'); clipboard.destroy() })
      }
    }
  }
  // const name1 = 'peipei'
  // console.log(`hello${name1}`)
  // function foo(x, y, ...rest) {
  //   console.log(rest.length)
  //   console.log(((x + y) * rest.length))
  // }
  // foo(1, 2, 3, 'hello', true, 7)
  // const flatten = (arr) => arr.reduce((a, b) => {
  //   if (Array.isArray(b)) {
  //     return a.concat(flatten(b))
  //     // 该项是数组，连接 递归调用的结果，否则直接连接
  //   }
  //   return a.concat(b)
  // }, [])
  // console.log(flatten([1, [2], [[3]], [[[4]]], [5]]))
  // const arr = [1, 4, 5, 6, 2, 4, 5, 1, 7, 8, '19', 19, '19', 18, '18']
  // const obj = {}
  // const repeat_arr = []
  // arr.forEach(v => {
  //   console.log(v + typeof v, obj[v + typeof v])
  //   if (obj[v + typeof v]) {
  //     repeat_arr.push(v)
  //   } else {
  //     obj[v + typeof v] = 1
  //   }
  // })
  // console.log([...new Set(arr)])
  const newarr = [1, 4, 5, 6, 2, 4, 5, 1, 7, 8, '19', 19, '19', 18, '18']
  console.log(newarr.filter(i => newarr.indexOf(i) !== newarr.lastIndexOf(i)))
  const find_dup = newarr => [...new Set(newarr.filter(i => newarr.indexOf(i) !== newarr.lastIndexOf(i)))]
  // console.log(newarr)
  console.log(find_dup)
  var set1 = Array.from(new Set([1, 1, 2, 2, 33, '33', 44, '44']))
  console.log(set1)
  // var set = new Set()'j
  
  // var arr1 = [1, 2, 3, 3, 2, 1]
  // arr1.map(val => set.add(val))
  // // arr.map(function(val) {
  // // set.add(val);
  // // })
  // arr1 = []
  // for (var i of set) {
  //   arr1.push(i)
  // }
  // console.log(arr1)
</script>