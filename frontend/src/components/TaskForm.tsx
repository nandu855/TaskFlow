import { useState } from "react";
import {
  PlusCircle,
  Calendar,
  Flag,
  Folder,
} from "lucide-react";

type Props = {
  onAdd: (
    title: string,
    description: string,
    priority?: string,
    category?: string,
    dueDate?: string
  ) => void;
};

export default function TaskForm({
  onAdd,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [category, setCategory] =
    useState("Personal");

  const [dueDate, setDueDate] =
    useState("");

  const submit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(
      title,
      description,
      priority,
      category,
      dueDate
    );

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Personal");
    setDueDate("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <PlusCircle
          size={34}
          className="text-blue-600"
        />

        <h2 className="text-3xl font-bold">
          Create Task
        </h2>

      </div>

      <form
        onSubmit={submit}
        className="space-y-5"
      >

        <input
          className="w-full border rounded-xl p-4"
          placeholder="Task Title"
          value={title}
          onChange={(e)=>
            setTitle(e.target.value)
          }
        />

        <textarea
          rows={4}
          className="w-full border rounded-xl p-4"
          placeholder="Description"
          value={description}
          onChange={(e)=>
            setDescription(
              e.target.value
            )
          }
        />

        <div className="grid md:grid-cols-3 gap-5">

          <div>

            <label className="flex items-center gap-2 mb-2 font-semibold">

              <Flag size={18}/>

              Priority

            </label>

            <select
              className="w-full border rounded-xl p-3"
              value={priority}
              onChange={(e)=>
                setPriority(
                  e.target.value
                )
              }
            >
              <option>
                High
              </option>

              <option>
                Medium
              </option>

              <option>
                Low
              </option>

            </select>

          </div>

          <div>

            <label className="flex items-center gap-2 mb-2 font-semibold">

              <Folder size={18}/>

              Category

            </label>

            <select
              className="w-full border rounded-xl p-3"
              value={category}
              onChange={(e)=>
                setCategory(
                  e.target.value
                )
              }
            >

              <option>
                Study
              </option>

              <option>
                Work
              </option>

              <option>
                Personal
              </option>

              <option>
                Shopping
              </option>

              <option>
                Others
              </option>

            </select>

          </div>

          <div>

            <label className="flex items-center gap-2 mb-2 font-semibold">

              <Calendar size={18}/>

              Due Date

            </label>

            <input
              type="date"
              className="w-full border rounded-xl p-3"
              value={dueDate}
              onChange={(e)=>
                setDueDate(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl w-full font-bold text-lg"
        >

          Create Task

        </button>

      </form>

    </div>
  );
}