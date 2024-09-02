'use client';

import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Submitting...</p>;
  }

  return (
    <>
      <button type="reset" className="mr-4 py-2 px-6 bg-gray-500 text-white rounded">Reset</button>
      <button type="submit" className="py-2 px-6 bg-blue-600 text-white rounded">Submit</button>
    </>
  );
}
