import React from 'react';
import { UserProfileCardProps } from '../../types';

/**
 * Displays user profile info with optional email and role.
 */
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="border p-4 rounded shadow bg-white max-w-sm">
      <div className="flex items-center space-x-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">{user.name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
          {showRole && <p className="text-sm text-gray-500">{user.role}</p>}
        </div>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>
      )}
      {children}
    </div>
  );
};