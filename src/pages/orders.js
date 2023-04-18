import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const Orders = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (session) {
        const res = await fetch(`/api/myorders?email=${session.user.email}`);
        const data = await res.json();
        setOrders(data.orders);
      }
    };
    if (status === 'authenticated') {
      fetchOrders();
    } else if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [session, status]);



  return (
    <div className='min-h-screen'>
      <Head>
        <title>orders</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <h1 className='font-semibold text-center text-2xl p-8'>My Orders</h1>
      <div className='container  mx-auto'>

        <div className='items'>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">

                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #OrderId
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Email
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Amount
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {orders.length === 0 && <p>No orders found</p>}
                      {orders.map((item)=>{
                      return <tr key={item._id}  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap md:text-sm font-medium text-gray-900">{item.orderId}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.amount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link href={`/order?id=` + item._id}><a>Details</a></Link>
                        </td>
                      </tr> })}
                      
                      
                      
                      
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Orders