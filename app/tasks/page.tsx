'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  status: 'pending' | 'completed';
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    deadline: new Date(),
  });
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleAddTask = () => {
    if (newTask.name.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        ...newTask,
        status: 'pending',
      };
      setTasks([...tasks, task]);
      setNewTask({ name: '', description: '', deadline: new Date() });
      setIsAddingTask(false);
    }
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
        : task
    ));
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{task.name}</h3>
          <Badge 
            variant={task.status === 'pending' ? 'secondary' : 'success'}
            className="cursor-pointer"
            onClick={() => toggleTaskStatus(task.id)}
          >
            {task.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {format(task.deadline, 'PPP')}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <Button onClick={() => setIsAddingTask(true)}>Add Task</Button>
      </div>

      {isAddingTask && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>New Task</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Task name"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {format(newTask.deadline, 'PPP')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={newTask.deadline}
                    onSelect={(date) => date && setNewTask({ ...newTask, deadline: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleAddTask}>Save Task</Button>
              <Button variant="outline" onClick={() => setIsAddingTask(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {tasks.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">No tasks yet. Add your first task!</p>
              </CardContent>
            </Card>
          ) : (
            tasks.map(task => <TaskCard key={task.id} task={task} />)
          )}
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          {tasks.filter(t => t.status === 'pending').map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          {tasks.filter(t => t.status === 'completed').map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}