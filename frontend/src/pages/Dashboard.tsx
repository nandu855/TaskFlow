import { useMemo } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import WelcomeCard from "../components/WelcomeCard";
import ProductivityScore from "../components/ProductivityScore";
import QuickActions from "../components/QuickActions";
import DashboardHeader from "../components/DashboardHeader";
import AnalyticsGrid from "../components/AnalyticsGrid";
import Chart from "../components/Chart";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import SectionTitle from "../components/SectionTitle";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import RecentActivity from "../components/RecentActivity";
import UpcomingTasks from "../components/UpcomingTasks";

import { useDashboard } from "../hooks/useDashboard";
import api from "../api/axios";

export default function Dashboard() {
  const {
    tasks,
    filteredTasks,
    loading,
    loadTasks,
    search,
    setSearch,
    filter,
    setFilter,
  } = useDashboard();

  async function addTask(
    title: string,
    description: string,
    priority = "Medium",
    category = "Personal",
    dueDate = ""
  ) {
    try {
      await api.post("/tasks", {
        title,
        description,
        priority,
        category,
        dueDate: dueDate || null,
        status: "Pending",
      });

      toast.success("Task Created");
      await loadTasks();
    } catch {
      toast.error("Unable to create task");
    }
  }

  async function updateTask(
    id: string,
    title: string,
    description: string,
    status: string
  ) {
    try {
      await api.put(`/tasks/${id}`, {
        title,
        description,
        status,
      });

      toast.success("Task Updated");
      await loadTasks();
    } catch {
      toast.error("Unable to update task");
    }
  }

  async function deleteTask(id: string) {
    if (!window.confirm("Delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);

      toast.success("Task Deleted");
      await loadTasks();
    } catch {
      toast.error("Unable to delete task");
    }
  }

  const completed = useMemo(
    () =>
      tasks.filter(
        (t: any) => t.status === "Completed"
      ).length,
    [tasks]
  );

  const pending = tasks.length - completed;

  const overdue = useMemo(() => {
    return tasks.filter((task: any) => {
      if (!task.dueDate) return false;

      return (
        task.status !== "Completed" &&
        new Date(task.dueDate) < new Date()
      );
    }).length;
  }, [tasks]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8">

          <DashboardHeader />

          <WelcomeCard />

          <AnalyticsGrid
            total={tasks.length}
            completed={completed}
            pending={pending}
            overdue={overdue}
          />

          <div className="mt-8">
            <ProductivityScore
              total={tasks.length}
              completed={completed}
            />
          </div>

          <div className="mt-8">
            <Chart
              completed={completed}
              pending={pending}
            />
          </div>

          <QuickActions />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <RecentActivity tasks={tasks} />
            <UpcomingTasks tasks={tasks} />
          </div>

          <div className="mt-10">
            <TaskForm onAdd={addTask} />
          </div>

          <div className="mt-10">
            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <FilterBar
              filter={filter}
              setFilter={setFilter}
            />
          </div>

          <div className="mt-10">

            <SectionTitle title="My Tasks" />

            {loading && <Loading />}

            {!loading && filteredTasks.length === 0 && (
              <EmptyState />
            )}

            {!loading &&
              filteredTasks.map((task: any) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                />
              ))}

          </div>

          <Footer />

        </div>
      </div>
    </>
  );
}