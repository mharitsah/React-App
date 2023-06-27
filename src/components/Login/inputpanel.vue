<template>
  <div>
    <v-row class="mb-4 mt-3">
      <v-col class="text-center">
        <!-- menjalankan fungsi addRow untuk menambah row ketika terjadi event click pada button Add Item-->
        <v-btn color="indigo-accent-4" @click="addRow">Add Item</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="(row, index) in rows" :key="index" class="ms-1">
      <v-col cols="3">
        <v-select
          :items="listKriteria"
          v-model="row.key"
          label="Kriteria"
        ></v-select>
      </v-col>
      <v-col cols="4">
        <!-- menjalankan fungsi addItem ketika melakukan enter pada input field -->
        <v-text-field
          v-model="row.value"
          placeholder="Value"
          v-if="row.key !== 'Age'"
          @keydown.enter.prevent="addItem(row)"
        ></v-text-field>
        <v-text-field
          v-model="row.value"
          placeholder="23"
          v-else
          type="number"
          @keydown.enter.prevent="addItem(row)"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <!-- menjalankan fungsi deleteRow ketika melakukan click pada button delete -->
        <v-btn color="red" @click="deleteRow(index)">X</v-btn>
      </v-col>
    </v-row>
    <!-- menampilkan isi array items ke dalam bentuk tabel -->
    <v-table class="mt-5">
      <thead>
        <tr>
          <th class="text-left">Kriteria</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <!-- melakukan looping sebanyak jumlah items untuk menampilkan isi nya pada tabel -->
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-left">{{ item.key }}</td>
          <td class="text-left">{{ item.value }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
//fungsi data mengembalikan nilai listKriteria untuk digunakan di dalam komponen
export default {
  data() {
    return {
      listKriteria: [
        "Age",
        "Education",
        "Interest",
        "Language",
        "Marital Status",
        "Skill"
      ],
      //membuat array rows dengan type key-value untuk menyimpan nilai kriteria dan valuenya
      rows: [{ key: "", value: "" }],
      //membuat list items untuk menyimpan semua key-value yang sudah di tambahkan
      items: []
    };
  },
  methods: {
    //Fungsi addRow untuk menambahkan nilai key-value kedalam array rows
    addRow() {
      this.rows.push({ key: "", value: "" });
    },
    //Fungsi deleteRow menghapus baris dari array rows pada indeks tertentu.
    deleteRow(index) {
      this.rows.splice(index, 1);
    },
    //Fungsi addItem menambahkan nilai key-value ke dalam list items jika kedua nilainya diisi
    addItem(row) {
      if (row.key && row.value) {
        this.items.push({ key: row.key, value: row.value });
      } 
      //Jika tidak memenuhi maka menampilkan alerts
      else {
        alert("Input harus diisi");
      }
    }
  }
};
</script>