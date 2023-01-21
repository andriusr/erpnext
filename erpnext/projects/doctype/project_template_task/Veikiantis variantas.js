//Instrukcijos kaip patobulinti project template naudojima
1. Doctype sukuriame papildomus laukus:
Project - "Serial number", "project_serial_number", Data
Project Template Task - "Task Name", "task_name", Data, Mandatory, In Grid View, In Standard Filter, Auto Naming: format:{task_name}-{#####}
					"Parent Task", "parent_task_template", Link, Options: Project Template Task, In Grid View
Task - "Template Task", "template_task_name", Data, Hidden
2. Modifikuojame project_template.py ir project.py (githube)
3. Pridedame Custom Script, prie Project Template doctype


frappe.ui.form.on('Project Template', {
	setup(frm) {
	   frm.fields_dict['tasks'].grid.get_field('parent_task_template').get_query = function(frm, cdt, cdn) {
			var child = locals[cdt][cdn];
			return{
				filters: {
					'task_name': ["!=", child.task_name],
					'parent': ["=", frm.name]
				}
			};
		}; 
    }
});

4. istriname py_cache failus, restartuojam supervizoriu.



