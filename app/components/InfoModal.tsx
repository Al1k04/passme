"use client";
import { useState } from "react";

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-neutral-800 hover:bg-emerald-500 transition-colors"
      >
        დეტალების ნახვა
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-md max-h-[80vh] overflow-y-auto rounded-lg bg-neutral-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-2">Primary / Secondary</h3>
            <p className="text-neutral-300">
              Primary ექაუნთი ნიშნავს, რომ თქვენ ითამაშებთ შეძენილ თამაშებს,
              თქვენი მთავარი პროფილიდან თამაშის მთელი პროგრესი და სეივი იქნება
              დაკავშირებული თქვენს მთავარ მომხმარებლის სახელთან, თამაშის
              დასაწყებად სხვა მომხმარებელზე გადართვა არ იქნება საჭირო.
            </p>
            <p className="text-neutral-300 mt-3">
              Secondary ექაუნთი ნიშნავს, რომ თქვენ ითამაშებთ შეძენილ თამაშებს,
              ჩემს მიერ მოცემული ექაუნთიდან, რაც ნიშნავს, რომ თამაშის ყველა
              შენახვა და პროგრესი დაკავშირებული იქნება კონკრეტულ მომხმარებლის
              სახელთან, ასევე დაგჭირდებათ ამ მოცემულ მომხმარებელზე გადართვა
              თქვენი შეძენილი თამაშის სათამაშოდ.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
