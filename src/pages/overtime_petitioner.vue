<!-- overtime_petitioner.vue -->
<template> 
    <!-- Main content -->
    <section class="content">
      <div class="row">
      	<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      		<div class="box">
		      	<div class="box-header with-border">
		            <h3 class="box-title">加班申请</h3>
		        </div>
		      	<div class="box-body">
		      		<form action="">
		                <div class="form-group">
		                  <label for="date">日期</label>
		                  <input type="text" name="daterange" class="form-control">
		                </div>
		                <div class="form-group">
		                  <label for="duration">时长（小时）</label>
		                  <div>
		                    <input type="number" class="form-control" id="duration" name="duration"placeholder="duration">
		                  </div>
		                </div>
		                <div class="form-group">
		                  <label>备注</label>
		                  <textarea class="form-control" rows="3" placeholder="请输入文字" style="resize: none"></textarea>
		                </div>
                    <div class="form-group">
                      <button class="btn btn-primary">提交</button>
                    </div>
			      	</form>
		      	</div>
		      </div>
      	</div>
      </div>
     
</template>
<script> 
var plugin = require('../js/plugin.js');
plugin.getdatepicker();

export default {
  data() {
  	return {
        msg: 'Menu',
        menuList:[
        	{
        		text:"Pagina 1",
        		isActive:false
        	},
        	{
        		text:"Pagina 2",
        		isActive:true
        	}
        ]
    }
  },
  components: {
     
  },
  mounted(){
  	$('input[name="daterange"]').daterangepicker({
  		"singleDatePicker": true,
  		"opens": "right",
  		autoclose: true,
  		// buttonClasses : [ 'btn btn-default' ],  
  		applyClass : 'btn-small btn-primary',  
  		cancelClass : 'btn-small',
  		locale : {  
  			applyLabel : '确定',  
  			cancelLabel : '取消',  
  			daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
  			monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月',  
  			'7月', '8月', '9月', '10月', '11月', '12月' ],  
  			firstDay : 1,
  		}
  	}, function(start, end, label) {
  		console.log("改变" + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	  });
  },
  methods: {}
}
</script>