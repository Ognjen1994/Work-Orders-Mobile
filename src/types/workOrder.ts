export type WorkOrder = {
  id: string;
  generatedDate: string;
  status: string;
  priority: string;
  description: string;
  type: string;
  resource: string;
  open?: boolean;
  completed?: boolean;
  canceled?: boolean;
  onHold?: boolean;
  category?: string;
  subtype?: string;
  notes?: string;
  assignedTo?: string
};

export type WorkOrderSummary = {
  id: string;
  generatedDate: string;
  targetDueDate: string;
  status: string;
  priority: string;
  description: string;
  fullType: string;
  type: string;
  resource: string;
  subtype: string;
  scheduleId?: string;
  scheduleName?: string;
  frequency?: string;
  name?: string,
  email?: string,
  number?: string,
  open?: boolean;
  completed?: boolean;
  canceled?: boolean;
  onHold?: boolean;
}