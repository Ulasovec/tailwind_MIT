import React from 'react';

const AdminTable = () => {
    return (
        <div className="bg-white">

            <div className="overflow-x-auto border-x border-t">
                <table className="table-auto w-full">
                    <thead className="border-b">
                    <tr className="bg-gray-100">
                        <th className="text-left p-4 font-medium">
                            Name
                        </th>
                        <th className="text-left p-4 font-medium">
                            Email
                        </th>
                        <th className="text-left p-4 font-medium">
                            Role
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="p-4">
                            Prof. Lucie Waters
                        </td>
                        <td className="p-4">
                            basic@example.com
                        </td>
                        <td className="p-4">
                            Administrator
                        </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="p-4">
                            Anahi Bashirian (You)
                        </td>
                        <td className="p-4">
                            admin@example.com
                        </td>
                        <td className="p-4">
                            Super Administrator
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTable;