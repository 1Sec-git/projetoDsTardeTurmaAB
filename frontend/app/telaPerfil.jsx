import React from "react";
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const { width, height } = useWindowDimensions();

  // Função simples para escalar valores proporcionalmente à largura da tela
  const rf = (size) => Math.round(size * (width / 390));

  const paddingHorizontal = Math.max(16, width * 0.05);
  const paddingTop = Math.max(40, height * 0.06);

  const genres = ["Rock", "Metal industrial", "Forró", "Glam Rock"];
  const artists = [
    { icon: "🎵", name: "Jackson do Pandeiro" },
    { icon: "🎸", name: "Nirvana" },
    { icon: "🎤", name: "Marilyn Manson" },
  ];

  return (
    <LinearGradient colors={["#8B5CF6", "#EAB308"]} style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: rf(40),
        }}
      >
        {/* Header com botão voltar */}
        <View
          style={{
            paddingTop,
            paddingHorizontal,
            paddingBottom: rf(20),
          }}
        >
          <TouchableOpacity
            style={{
              width: rf(40),
              height: rf(40),
              borderRadius: rf(20),
              backgroundColor: "rgba(255,255,255,0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: rf(18) }}>←</Text>
          </TouchableOpacity>
        </View>

        {/* Seção do perfil */}
        <View style={{ alignItems: "center", paddingHorizontal }}>
          {/* Foto do perfil */}
          <View
            style={{
              width: rf(120),
              height: rf(120),
              borderRadius: rf(60),
              backgroundColor: "#4A5568",
              marginBottom: rf(20),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: rf(20) }}>👤</Text>
          </View>

          {/* Nome do usuário */}
          <Text
            style={{
              color: "white",
              fontSize: rf(24),
              fontWeight: "bold",
              marginBottom: rf(8),
              textAlign: "center",
            }}
          >
            Fulano D'Town
          </Text>

          {/* Estatísticas */}
          <Text
            style={{
              color: "white",
              fontSize: rf(16),
              marginBottom: rf(20),
              textAlign: "center",
            }}
          >
            23 seguidores • 4 seguindo
          </Text>

          {/* Botão Seguir */}
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(139, 69, 19, 0.8)",
              paddingHorizontal: rf(40),
              paddingVertical: rf(12),
              borderRadius: rf(25),
              marginBottom: rf(20),
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: rf(16),
                fontWeight: "bold",
              }}
            >
              Seguir +
            </Text>
          </TouchableOpacity>

          {/* Info do usuário */}
          <Text
            style={{
              color: "white",
              fontSize: rf(14),
              marginBottom: rf(20),
              textAlign: "center",
            }}
          >
            yrCapsaicin 🎵 naousoiphone
          </Text>
        </View>

        {/* Bio */}
        <View
          style={{
            marginHorizontal: paddingHorizontal,
            backgroundColor: "rgba(139, 69, 19, 0.6)",
            borderRadius: rf(20),
            padding: rf(20),
            marginBottom: rf(20),
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: rf(16),
              lineHeight: rf(24),
              textAlign: "justify",
            }}
          >
            eeeer amo ouçar musga{"\n"}amo tumati tamem
          </Text>
        </View>

        {/* Tags de gêneros */}
        <View
          style={{
            paddingHorizontal,
            marginBottom: rf(30),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: rf(10),
            }}
          >
            {genres.map((genre, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  backgroundColor: "rgba(255, 182, 193, 0.8)",
                  paddingHorizontal: rf(20),
                  paddingVertical: rf(10),
                  borderRadius: rf(20),
                  marginBottom: rf(10),
                  width: "48%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: rf(14),
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Artistas mais ouvidos */}
        <View style={{ paddingHorizontal, paddingBottom: rf(40) }}>
          <Text
            style={{
              color: "white",
              fontSize: rf(20),
              fontWeight: "bold",
              marginBottom: rf(20),
            }}
          >
            Artistas mais ouvidos
          </Text>

          {artists.map((artist, i) => (
            <TouchableOpacity
              key={i}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255, 182, 193, 0.6)",
                borderRadius: rf(15),
                padding: rf(15),
                marginBottom: rf(10),
              }}
            >
              <View
                style={{
                  width: rf(40),
                  height: rf(40),
                  borderRadius: rf(20),
                  backgroundColor: "#4A5568",
                  marginRight: rf(15),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: rf(12) }}>{artist.icon}</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: rf(16),
                  fontWeight: "500",
                }}
              >
                {artist.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
