# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document

class ProjectTemplate(Document):
	def validate(self):
			if self.is_new():
				for d in self.tasks:
					if d.parent_task_template:
						d.parent_task_template = None

