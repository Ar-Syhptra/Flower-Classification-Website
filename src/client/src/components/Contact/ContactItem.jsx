function ContactItem({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ContactItem;
