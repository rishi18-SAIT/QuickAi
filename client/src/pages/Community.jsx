import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { getToken } = useAuth();

  const fetchCreations = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get('/api/user/get-published-creations', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const imageLikeToggle = async (id) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        '/api/user/toggle-like-creation',
        { id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        toast.success(data.message);
        // Just update the liked state locally instead of refetching everything
        setCreations((prev) =>
          prev.map((creation) =>
            creation.id === id
              ? {
                  ...creation,
                  likes: creation.likes.includes(user.id)
                    ? creation.likes.filter((uid) => uid !== user.id)
                    : [...creation.likes, user.id],
                }
              : creation
          )
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-xl font-semibold mb-2'>Community Creations</h2>

      {loading ? (
        <div className='flex justify-center items-center h-full'>
          <span className='w-10 h-10 rounded-full border-4 border-green-500 border-t-transparent animate-spin'></span>
        </div>
      ) : (
        <div className='bg-white w-full rounded-xl overflow-y-auto p-4 flex flex-wrap gap-4'>
          {creations.length === 0 ? (
            <p className='text-gray-500'>No creations found.</p>
          ) : (
            creations.map((creation) => (
              <div
                key={creation.id}
                className='relative group w-full sm:w-1/2 lg:w-1/3'
              >
                <img
                  src={creation.content}
                  alt='Creation'
                  className='w-full h-64 object-cover rounded-lg shadow-sm'
                />

                <div
                  className='absolute inset-0 flex gap-2 items-end justify-end group-hover:justify-between p-3 
                  group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg transition-all duration-300'
                >
                  <p className='text-sm hidden group-hover:block max-w-[70%]'>
                    {creation.prompt}
                  </p>

                  <div className='flex gap-1 items-center'>
                    <p className='text-xs'>{creation.likes.length}</p>
                    <Heart
                      onClick={() => imageLikeToggle(creation.id)}
                      className={`min-w-5 h-5 hover:scale-110 transition-transform duration-200 cursor-pointer ${
                        creation.likes.includes(user.id)
                          ? 'fill-red-500 text-red-600'
                          : 'text-white'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Community;
