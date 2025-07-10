import styles from "./page.module.css";
import clsx from "clsx";

export default function SizeGuide() {
	return (
		<div className={clsx('page', styles.page)}>
			<main className={styles.main}>
				<h1>Size Guide</h1>
				<section className={styles.section}>
					<div className={clsx(styles.subtitle)}>Bra Size</div>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>US Size</th>
							<th>Bust (in)</th>
							<th>EU Size</th>
							<th>Bust (cm)</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>32A</td>
							<td>32"</td>
							<td>70A</td>
							<td>81–82</td>
						</tr>
						<tr>
							<td>32B</td>
							<td>33"</td>
							<td>70B</td>
							<td>83–84</td>
						</tr>
						<tr>
							<td>32C</td>
							<td>34"</td>
							<td>70C</td>
							<td>85–86</td>
						</tr>
						<tr>
							<td>34A</td>
							<td>34"</td>
							<td>75A</td>
							<td>86–87</td>
						</tr>
						<tr>
							<td>34B</td>
							<td>35"</td>
							<td>75B</td>
							<td>88–89</td>
						</tr>
						<tr>
							<td>34C</td>
							<td>36"</td>
							<td>75C</td>
							<td>90–91</td>
						</tr>
						<tr>
							<td>36B</td>
							<td>37"</td>
							<td>80B</td>
							<td>93–94</td>
						</tr>
						<tr>
							<td>36C</td>
							<td>38"</td>
							<td>80C</td>
							<td>95–96</td>
						</tr>
						<tr>
							<td>36D</td>
							<td>39"</td>
							<td>80D</td>
							<td>97–99</td>
						</tr>
						<tr>
							<td>38C</td>
							<td>40"</td>
							<td>85C</td>
							<td>101–102</td>
						</tr>
						<tr>
							<td>38D</td>
							<td>41"</td>
							<td>85D</td>
							<td>103–104</td>
						</tr>
						</tbody>
					</table>
				</section>
				<section className={styles.section}>
					<div className={clsx(styles.subtitle)}>Panty Size</div>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>US Size</th>
							<th>Hips (in)</th>
							<th>EU Size</th>
							<th>Hips (cm)</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>XS</td>
							<td>33–34.5</td>
							<td>34</td>
							<td>84–88</td>
						</tr>
						<tr>
							<td>S</td>
							<td>35–36.5</td>
							<td>36</td>
							<td>89–93</td>
						</tr>
						<tr>
							<td>M</td>
							<td>37–38.5</td>
							<td>38</td>
							<td>94–98</td>
						</tr>
						<tr>
							<td>L</td>
							<td>39–40.5</td>
							<td>40</td>
							<td>99–103</td>
						</tr>
						<tr>
							<td>XL</td>
							<td>41–42.5</td>
							<td>42</td>
							<td>104–108</td>
						</tr>
						</tbody>
					</table>
				</section>
			</main>

		</div>
	);
}
