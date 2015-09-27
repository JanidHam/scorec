{% extends '../base.swig' %}

{% block styles %}
	<!-- Select2 -->
    <link rel="stylesheet" href="/plugins/select2/select2.min.css">
	<!-- daterange picker -->
	<link href="/plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
	<!-- Bootstrap time Picker -->
	<link href="/plugins/timepicker/bootstrap-timepicker.css" rel="stylesheet"/>
	<!-- Bootstrap date Picker -->
	<link href="/plugins/datepicker/datepicker3.css" rel="stylesheet"/>

	<style>
		/* enable absolute positioning */
		.inner-addon { 
		    position: relative; 
		}

		/* style icon */
		.inner-addon .fa {
		  position: absolute;
		  padding: 10px;
		  pointer-events: none;
		}

		/* align icon */
		.left-addon .fa  { left:  0px;}
		.right-addon .fa { right: 0px;}

		/* add padding  */
		.left-addon input  { padding-left:  30px; }
		.right-addon input { padding-right: 30px; }

		.form-control { border-radius: 10px !important; }

		.box-footer { padding-left: 15px; }

	</style>
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
	        <h3 class="box-title">Agregar ponencia</h3>
	      </div><!-- /.box-header -->
	      <!-- form start -->
	      <form role="form" method="post">
	        <div class="box-body">
	          <!-- ponentes input -->
	          	<div class="col-md-6">
                  <div class="form-group">
                    <label>Ponentes</label>
                    <select id="ponentes" class="form-control select2">
                    	{% for ponente in ponentes %}
							<option value="{{ponente.id}}">{{ ponente.name }}</option>		
						{% endfor %}
                    </select>
                  </div>
                </div>
	            <!-- temas input -->
	          	<div class="col-md-6">
                  <div class="form-group">
                    <label>Temas</label>
                    <select id="temas" class="form-control select2">
                    	{% for tema in temas %}
							<option value="{{tema.id}}">{{ tema.name }}</option>		
						{% endfor %}
                    </select>
                  </div>
                </div>

	          <!-- Fecha input -->
	          	<div class="col-md-4">
	          		<div class="form-group">
		          		<label>Fecha</label>
		          		<div class="inner-addon right-addon">
						    <i class="fa fa-calendar"></i>
						    <input id="date" name="date" class="datepicker form-control" data-provide="datepicker"/>
						</div>
	            	</div>
	          	</div>
	            <!-- time Picker -->
	            <div class="col-md-4">
                  <div class="bootstrap-timepicker">
                    <div class="form-group">
                      <label>Hora Inicio</label>
                      	<div class="inner-addon right-addon">
						    <i class="fa fa-clock-o"></i>
						    <input id="startHour" type="text" class="form-control timepicker">
						</div>
                    </div><!-- /.form group -->
                  </div>
                </div>

                <!-- time Picker -->
	            <div class="col-md-4">
                  <div class="bootstrap-timepicker">
                    <div class="form-group">
                      <label>Hora Fin</label>
                      	<div class="inner-addon right-addon">
						    <i class="fa fa-clock-o"></i>
						    <input id="endHour" type="text" class="form-control timepicker">
						</div>
                    </div><!-- /.form group -->
                  </div>
                </div>
				
				<div class="col-md-4">
					<div class="form-group">
                     	<label>Minutos de Retardo</label>
						<input id="minLate" type="tel" class="form-control" />
                	</div><!-- /.form group -->
				</div>

				<div class="col-md-4">
					<div class="form-group">
                     	<label>Minutos de Falta</label>
						<input id="minFault" type="tel" class="form-control">
                	</div><!-- /.form group -->
				</div>

				<div class="col-md-4">
					<div class="form-group">
                     	<label>Aula/Salón</label>
						<input id="aula" type="text" class="form-control">
                	</div><!-- /.form group -->
				</div>
                
	        <div class="box-footer">
	          <button id="btnSave" type="submit" class="btn btn-success">Guardar</button>
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
	<!-- Select2 -->
	<script src="/plugins/select2/select2.full.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" type="text/javascript"></script>
	<!-- bootstrap date picker -->
	<script src="/plugins/datepicker/bootstrap-datepicker.js" type="text/javascript"></script>
	<script src="/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
	<!-- bootstrap time picker -->
	<script src="/plugins/timepicker/bootstrap-timepicker.js" type="text/javascript"></script>
	
	<script src="/js/ponencias/dist/index.min.js"></script>

	<script type="text/javascript">
	  $(function () {
	  	$(".select2").select2()
	    
	    $('.datepicker').datepicker({
	    	autoclose: true,
	    	todayHighlight: true,
	    })

	    $('input[name="daterange"]').daterangepicker({
	        singleDatePicker: true,
	        showDropdowns: true
	    })

	    //Timepicker
        $(".timepicker").timepicker({
          showInputs: false,
          minuteStep: 1,
          showMeridian: false,
        })

	  })
	</script>

{% endblock scripts %}