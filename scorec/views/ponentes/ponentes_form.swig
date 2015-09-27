{% extends '../base.swig' %}

{% block styles %}

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
	        <h3 class="box-title">Agregar ponente</h3>
	      </div><!-- /.box-header -->
	      <!-- form start -->
	      <form role="form" method="post">
	        <div class="box-body">
	          <!-- text input -->
	          <div class="form-group">
	            <label>Nombre del ponete</label>
	            <input type="text" id="ponente" name="ponente" class="form-control" placeholder="Ej. JOHN DOE"/>
	          </div>

	          <!-- textarea input -->
	          <div class="form-group">
	            <label>Empresa de procedencia</label>
	            <input id="company" name="company" class="form-control" placeholder="Ej. GOOGLE"/>
	          </div>
	        </div><!-- /.box-body -->

	        <div class="box-footer">
	          <button id="btnSave" type="submit" class="btn btn-success">Guardar</button>
	        </div>
	      </form>
	    </div><!-- /.box -->

	  </div><!--/.col (left) -->
	</div>   <!-- /.row -->

{% endblock main_content %}

{% block scripts %}
	<script src="/js/ponentes/dist/index.min.js"></script>
	<!-- Page script -->
	<script type="text/javascript">
	  $(function () {
	  	$('#ponente').focus()
	  })
	</script>

{% endblock scripts %}