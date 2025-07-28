import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer transition-shadow hover:shadow-md'
    >
      <div className='flex justify-between items-start gap-4'>
        <div>
          <h2 className='text-base font-medium text-black'>{item.prompt}</h2>
          <p className='text-gray-500'>
            {item.type} – {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button
          className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full text-xs pointer-events-none'
        >
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className='mt-3'>
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt={item.prompt || 'Generated content'}
              className='w-full max-w-md rounded shadow mt-2'
            />
          ) : (
            <div className='max-h-64 overflow-y-auto text-sm text-slate-700 mt-2'>
              <div className='reset-tw'>
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem
