// Functions & Variables

const birthday = new Date(userData[0].birthday)

const birthMonth = birthday.getMonth()
const birthYear = birthday.getFullYear()

const [{month, year}, setDate] = useState({month: birthMonth, year: birthYear});
const [selectedDates, setSelectedDates] = useState({
  start: new Date(birthday),
  end: new Date(birthday),
});

const handleMonthChange = useCallback(
  (month, year) => setDate({month, year}),
  console.log(month,year),
  [],
);

// Polaris component & Props

<DatePicker
month={month}
year={year}
disabled={!isEditing}
onChange={setSelectedDates}
onMonthChange={handleMonthChange}
selected={selectedDates}
/>
