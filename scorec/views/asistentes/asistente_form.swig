{% extends '../base.swig' %}

{% block styles %}
	<!-- daterange picker -->
	<link href="/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
	<!-- iCheck for checkboxes and radio inputs -->
	<link href="/plugins/iCheck/all.css" rel="stylesheet" type="text/css" />
	<!-- Bootstrap Color Picker -->
	<link href="/plugins/colorpicker/bootstrap-colorpicker.min.css" rel="stylesheet"/>
	<!-- Bootstrap time Picker -->
	<link href="/plugins/timepicker/bootstrap-timepicker.min.css" rel="stylesheet"/>
	<!-- Theme style -->
	<link href="/plugins/iCheck/all.css" rel="stylesheet" type="text/css" />
{% endblock styles %}

{% block sidebar_menu %}
	{% include './sidebar_menu.swig' %}
{% endblock sidebar_menu %}

{% block main_content %}

	<div class="row">
	  <!-- left column -->
	  <div class="col-md-12">
	    <!-- general form elements -->
	    <div class="box box-primary">
	      <div class="box-header">
	        <h3 class="box-title">Agregar asistente</h3>
	      </div><!-- /.box-header -->
	      <!-- form start -->
	      <form role="form" method="post">
	        <div class="box-body">
	          <!-- text input -->
	          <div class="form-group">
	            <label>Nombre(s)</label>
	            <input type="text" id="id_nombre" name="nombre" class="form-control" placeholder="Introduzca el(los) nombre(s) ..."/>
	          </div>

	          <!-- text input -->
	          <div class="form-group">
	            <label>Apellidos</label>
	            <input type="text" id="id_apellidos" name="apellidos" class="form-control" placeholder="Introduzca los apellidos ..."/>
	          </div>

	          <!-- phone mask -->
	          <div class="form-group">
	            <label>Teléfono</label>
	            <div class="input-group">
	              <div class="input-group-addon">
	                <i class="fa fa-phone"></i>
	              </div>
	              <input type="text" id="id_telefono" name="telefono" class="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask/>
	            </div><!-- /.input group -->
	          </div><!-- /.form group -->

	          <div class="form-group">
	            <label for="exampleInputEmail1">Email address</label>
	            <input type="email" id="id_email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Introduzca un email ...">
	          </div>

	          <!-- text input -->
	          <div class="form-group">
	            <label>Dirección</label>
	            <input type="text" id="id_direccion" name="direccion" class="form-control" placeholder="Introduzca una dirección ..."/>
	          </div>
	        </div><!-- /.box-body -->

	        <div class="box-footer">
	          <button type="submit" class="btn btn-primary">Submit</button>
	        </div>
	      </form>
	    </div><!-- /.box -->

	  </div><!--/.col (left) -->
	</div>   <!-- /.row -->

{% endblock main_content %}

{% block scripts %}
	<!-- InputMask -->
	<script src="/plugins/input-mask/jquery.inputmask.js" type="text/javascript"></script>
	<script src="/plugins/input-mask/jquery.inputmask.date.extensions.js" type="text/javascript"></script>
	<script src="/plugins/input-mask/jquery.inputmask.extensions.js" type="text/javascript"></script>
	<!-- date-range-picker -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" type="text/javascript"></script>
	<script src="../../plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
	<!-- bootstrap color picker -->
	<script src="/plugins/colorpicker/bootstrap-colorpicker.min.js" type="text/javascript"></script>
	<!-- bootstrap time picker -->
	<script src="/plugins/timepicker/bootstrap-timepicker.min.js" type="text/javascript"></script>
	<!-- SlimScroll 1.3.0 -->
	<script src="/plugins/slimScroll/jquery.slimscroll.min.js" type="text/javascript"></script>
	<!-- iCheck 1.0.1 -->
	<script src="/plugins/iCheck/icheck.min.js" type="text/javascript"></script>
	<!-- Page script -->
	<script type="text/javascript">
	  $(function () {
	  	$('#id_nombre').focus();
	    //Datemask dd/mm/yyyy
	    $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
	    //Datemask2 mm/dd/yyyy
	    $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
	    //Money Euro
	    $("[data-mask]").inputmask();

	    //Date range picker
	    $('#reservation').daterangepicker();
	    //Date range picker with time picker
	    $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
	    //Date range as a button
	    $('#daterange-btn').daterangepicker(
	            {
	              ranges: {
	                'Today': [moment(), moment()],
	                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
	                'Last 7 Days': [moment().subtract('days', 6), moment()],
	                'Last 30 Days': [moment().subtract('days', 29), moment()],
	                'This Month': [moment().startOf('month'), moment().endOf('month')],
	                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
	              },
	              startDate: moment().subtract('days', 29),
	              endDate: moment()
	            },
	    function (start, end) {
	      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
	    }
	    );

	    //iCheck for checkbox and radio inputs
	    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
	      checkboxClass: 'icheckbox_minimal-blue',
	      radioClass: 'iradio_minimal-blue'
	    });
	    //Red color scheme for iCheck
	    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
	      checkboxClass: 'icheckbox_minimal-red',
	      radioClass: 'iradio_minimal-red'
	    });
	    //Flat red color scheme for iCheck
	    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
	      checkboxClass: 'icheckbox_flat-green',
	      radioClass: 'iradio_flat-green'
	    });

	    //Colorpicker
	    $(".my-colorpicker1").colorpicker();
	    //color picker with addon
	    $(".my-colorpicker2").colorpicker();

	    //Timepicker
	    $(".timepicker").timepicker({
	      showInputs: false
	    });
	  });
	</script>

{% endblock scripts %}