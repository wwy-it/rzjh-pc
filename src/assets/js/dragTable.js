export default {
  //拖动封装
  tableDrag(id, rowIndex) {
    let table = document.getElementById(id)
    if (table === null) return false
    
    let col = table.tHead.getElementsByTagName("col")
    let bodyCol = table.tBodies[0].getElementsByTagName("table")[0].getElementsByTagName("col")
    const tab = {
      mouseDown: false,  //是否按下
      thisTd: {}, //拖动的th-dom
      startX: 0,  //开始拖动的位置
      tdWidth: 0,  //表格的宽度
      num: "",    //第几个表格
    }
    //按下开始拖动
    document.addEventListener("mousemove", function () {
      if (tab.mouseDown === true) {
        let td = document.querySelectorAll("#" + id + ">tbody>tr>td:nth-child(" + Number(tab.num + 1) + ")")
        if (event.x - tab.startX > 0) {
          col[tab.num].width = tab.tdWidth + (event.x - tab.startX);
          bodyCol[tab.num].width = tab.tdWidth + (event.x - tab.startX)
        } else {
          if (tab.tdWidth + (event.x - tab.startX) > 50) {
            col[tab.num].width = tab.tdWidth + (event.x - tab.startX);
            bodyCol[tab.num].width = tab.tdWidth + (event.x - tab.startX)
          }
        }
      }
    })
    //放开鼠标，结束列宽调整
    document.addEventListener("mouseup", function () {
      if (tab.mouseDown === true) {
        tab.mouseDown = false
        // tab.thisTd.style.cursor = 'default'
      }
    })

    //按下
    for (let i = 0; i < table.rows[rowIndex].cells.length; i++) {

      table.rows[rowIndex].cells[i].onmousedown = function () {
        if (event.offsetX < 10 && i > 0) {
          tab.thisTd = table.rows[rowIndex].cells[i - 1]
          tab.num = i - 1
          tab.mouseDown = true //按下
          tab.startX = event.x
          tab.tdWidth = tab.thisTd.offsetWidth
        } else if (event.offsetX > this.offsetWidth - 10 && i < table.rows[rowIndex].cells.length - 1) {
          tab.thisTd = this
          tab.num = i
          tab.mouseDown = true
          tab.startX = event.x
          tab.tdWidth = tab.thisTd.offsetWidth
        }
      }

      //进入
      table.rows[rowIndex].cells[i].onmousemove = function (event) {
        if (event.target.tagName != "TH") {
          this.style.cursor = 'default'
          return false
        }
        if (event.offsetX > this.offsetWidth - 10 && i < table.rows[rowIndex].cells.length - 1) {//左边
          this.style.cursor = 'col-resize'
        } else if (event.offsetX < 10 && i > 0) {
          this.style.cursor = 'col-resize'
        } else {
          this.style.cursor = 'default'
        }
      }
    }
  },
}