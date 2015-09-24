{% extends '../base.swig' %}

{% block sidebar_menu %}
	{% include './sidebar_menu.swig' %}
{% endblock sidebar_menu %}

{% block main_content %}
	<div class="row">
	  <div class="col-xs-12">
	    <div class="box">
	      <div class="box-header">
	        <h3 class="box-title">Data Table With Full Features</h3>
	      </div><!-- /.box-header -->
	      <div class="box-body">
	        <table id="example1" class="table table-bordered table-striped">
	          <thead>
	            <tr>
	              <th>Nombre(s)</th>
	              <th>Apellidos</th>
	              <th>Teléfono</th>
	              <th>Email</th>
	              <th>Dirección</th>
	            </tr>
	          </thead>
	          <tbody>
	          	{% for asistente in asistentes %}
	            <tr>   
	              <td>{{ asistente.nombre }}</td>
	              <td>{{ asistente.apellidos }}</td>
	              <td>{{ asistente.telefono }}</td>
	              <td>{{ asistente.email }}</td>
	              <td>{{ asistente.direccion }}</td>   
	            </tr>
	            {% endfor %}
	          </tbody>
	        </table>
	      </div><!-- /.box-body -->
	    </div><!-- /.box -->
	  </div><!-- /.col -->
	</div><!-- /.row -->

{% endblock main_content %}

{% block scripts %}
	<!--SCRIPTS-->
	<script src="/js/dependencies/sails.io.js"></script>
	<script src="/js/dependencies/jQuery/jQuery-2.1.4.min.js"></script>
	<script src="/bootstrap/js/bootstrap.min.js"></script>
	<script src="/plugins/fastclick/fastclick.min.js"></script>
	<script src="/js/app.min.js"></script>
	<!--SCRIPTS END-->
	<script>
		io.socket.on('asistente', function (event) {
			console.log(event);
		});

		io.socket.get('/asistente', function (resData, jwres) {
			console.log(resData);
		});
	</script>
{% endblock scripts %}