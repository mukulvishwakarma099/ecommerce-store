interface LoadingSkeletonProps {
  skeleton: number;
}

const LoadingSkeleton = ({ skeleton }: LoadingSkeletonProps) => {
  return (
    <div className="flex flex-col gap-4" key={skeleton}>
      <div className="skeleton h-[300px] w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default LoadingSkeleton;
